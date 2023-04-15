# A-Frame_VRHand
A-FrameのVRで動作するOculusコントローラの操作システム
デスクトップからでもアクセスできますが，VR向けに開発しています
講義･集会を実施できるようになることを目標に開発中です

## 特徴
- オブジェクトに対して，掴む(位置，回転オフセットの固定)･拡大縮小
- オブジェクトを掴んだ手に対するオブジェクトの回転オフセットをクォータニオンで計算
- サーバーに接続したクライアン間でオブジェクトのトランスフォームの同期(WebSocket)

## 使い方
1. サーバー証明書を取得  
SelfSignedフォルダにサーバーの秘密鍵(live_server.key.pem)とサーバー証明書(live_server.cert.pem)を作成  
  
2. プロンプトからサーバーを起動
プロンプトから/AFrame-testに移動し，以下のコマンドからサーバーを起動
  
```
node server.js
```
   
3. ウェブからindex.htmlまたはstudent.htmlを取得  
以下のリンクからアクセス  
https://{ipアドレス}  
https://{ipアドレス}/student.html  
index.html --> 教授または集会のホストがアクセス  
student.html --> ホスト以外の人(学生など)がアクセス  

4. サーバーの終了  
サーバーを実行中のプロンプトCTRL + Cを実行  
  
## 操作方法
- トリガー(両手): UI(ボタンなど)の選択  
- グリップ(両手): オブジェクトを掴む
- A: プレイヤーの移動

## 要件
- node (開発にはv16.15.0を使用)
- OpenSSL (サーバーの証明書を取得)

## TODO
- 新しいクライアントの接続時に，クライアントが現在の空間の情報をロードできるようにする
- プレイヤーの可視化

## 参考
- [httpsサーバーの立て方](https://kaworu.jpn.org/javascript/node.js%E3%81%AB%E3%82%88%E3%82%8BHTTPS%E3%82%B5%E3%83%BC%E3%83%90%E3%81%AE%E4%BD%9C%E3%82%8A%E6%96%B9)
- [ssl自己証明書の発行方法](https://weblabo.oscasierra.net/openssl-gencert-1/)
- [THREE.jsのベクトルライブラリ](https://qiita.com/aa_debdeb/items/c58d5eda9a4052b5dd2f)
- [Object3D](https://threejs.org/docs/#api/en/core/Object3D.getWorldQuaternion)
- [Quaternion](https://threejs.org/docs/#api/en/math/Quaternion)
- [回転の取得方法](https://aframe.io/docs/1.4.0/introduction/developing-with-threejs.html)
