---
title: 'Djangoでのログイン機能実装'
date: '2021-05-05'
img: 'blogIcon/memo.svg'
---

これは自分の備忘録です。  
自学のために色々調べたのですが、バージョン 2 の解説等が多くややこしかったのである程度まとめておきます。  
同じような悩みにぶつかった人のためになればと思って書いています。

大体のことはチュートリアルやればわかる  
<a href="https://docs.djangoproject.com/ja/3.1/intro/tutorial01/">https://docs.djangoproject.com/ja/3.1/intro/tutorial01/</a>

＜使用環境＞

・OS...windows10  
・Python...3.7.6  
・Django...3.1.3

<h2>環境構築</h2>

ローカルに python をインストールしても良いですが、パッケージ管理等を考えると anaconda を使用した方が良いかと。  
ここら辺は調べたらたくさん出てくるのでスルー。

パッケージは恐らく

```
pip install django
pip install pillow
```

<h2>ログイン周りの実装</h2>
Djangoにはデフォルトでadminサイトが用意されています。  
自身のブログサイト等を作成するときはこちらの管理画面を使用するとよさそう。

自分がやりたかったこととしては

1)誰でもアカウントを作成可能  
2)ユーザーごとのマイページの作成

という機能を実装したかったため、ログイン機能を自作しました。  
流れとしては  
1．start app 　コマンドでログイン処理を行う app の作成  
2. Model でユーザー情報を定義(AbstractUser を継承)  
3. LoginView,LogoutView でログイン、ログアウトの View を作成  
4. 新規登録に関しては View が存在しないため、自作のメソッドで対応  
5. Form で Model と View の関連付け

上記のような感じで進めていきました。

2:

```model.py
class User(AbstractUser):
    pass
```

と AbstractUser を継承しただけです。  
一応公式ドキュメントではオーバーライドで自作するように書かれています。  
ここを編集することで自分の好きなカラムを足せます。

<a href="https://docs.djangoproject.com/en/3.1/topics/auth/customizing/">AbstractUser の参照</a>

3：
ログイン、ログアウト機能の実装方法としては以下の選択肢で考えていました。

```view.py
from django.contrib.auth import authenticate, login

def my_view(request):
    username = request.POST['username']
    password = request.POST['password']
    user = authenticate(request, username=username, password=password)
    if user is not None:
        login(request, user)
        # Redirect to a success page.
        ...
    else:
        # Return an 'invalid login' error message.
        ...

```

及び

View を用いた方法
参照元：https://docs.djangoproject.com/ja/3.1/topics/auth/default/

View を用いた方がコード量が減るのでこちらで実装しましたが、  
直感的にわかりやすいのは前者のメソッド内で処理する方法かと思われます。

View を使用する際には中身の変数等を確認するようにしましょう。  
無駄なコードやエラーの原因が割と載っています。

今回で話すと、Form は html で何かしらクラス名をつけるときに用いるので一旦はデフォルトです。  
自分は template_name だけ編集してあとはそのまま継承しています。  
ログアウトも同じように実装しているので省略

4:
新規登録画面が自分は一番躓きました。
結論から書いておきます。

```view.py
def signup(request):
    if request.method == 'POST':
        form = UserCreateForm(request.POST)
        if form.is_valid():
            form.save()
        else:
            print(form.errors)
        return redirect('/login')
    return render(request, 'loginauth/create_user.html')

def redirect_view(request):
    response = redirect('/login')
    return response
```

```forms.py
class UserCreateForm(UserCreationForm):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.fields['username'].widget.attrs['class'] = 'form-control'
        self.fields['password1'].widget.attrs['class'] = 'form-control'
        self.fields['password2'].widget.attrs['class'] = 'form-control'
        self.fields['email'].widget.attrs['class'] = 'form-control'

    class Meta:
       model = User
       fields = ("username", "password1","password2", "email",)
```

という感じです。  
補足していきます。

個人的に一番ややこしかった部分が  
views.py の 　`form = UserCreateForm(request.POST)`  
でした。

何をやっているか簡単にまとめると  
UserCreationForm という User を作成する用の Form が存在していて、  
そのフォームに Model:User と fields を設定。  
で views.py の中身で request.POST から fields に一致するものを抽出して form.is_valid()で password1 と 2 が一致しているか確認。  
一致していたら、そのまま保存。

という流れです。

<h1>結論</h1>
大体Document読めば解決できます。  
あとはそれを解釈する努力が必要

そのためにはパッケージ等の中身で行われている処理まで理解していかなければならない！！！！

ちなみに自分はまだ全然わかってないので時間があるたびに中身読み込んでます。
詰まった時にメソッドやクラスの変数等を見てみるとヒントが多いのでオススメ
