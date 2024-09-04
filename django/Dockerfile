# ベースイメージを指定
FROM python:3.9

# 作業ディレクトリを設定
WORKDIR /app

# 必要なパッケージをインストール
COPY requirements.txt requirements.txt
RUN pip install -r requirements.txt

# アプリケーションのソースコードをコピー
COPY operating_door_lock operating_door_lock

RUN python operating_door_lock/manage.py migrate

# アプリケーションを起動するコマンドを指定
CMD ["python", "operating_door_lock/manage.py", "runserver", "0.0.0.0:8000"]
