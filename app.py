import os
from flask import Flask, jsonify, render_template

app = Flask(__name__)


# Başlangıç sayfası /anasayfa/index.html olarak ayarlandı
@app.route('/')
def anasayfa():
    return render_template('anasayfa/index.html')

# İkinci sayfa olan /templates/index.html için route
@app.route('/templates/index.html')
def ikinci_sayfa():
    return render_template('index.html')

@app.route('/t3-sat')
def t3_sat():
    return render_template('t3-sat.html')


# Haritaları klasörden almak için endpoint
@app.route('/get_maps/<folder_name>')
def get_maps(folder_name):
    base_path = os.path.join('static', 'images', folder_name)
    try:
        maps = os.listdir(base_path)  # Klasördeki dosyaları listele
        print(maps)
        maps = [f'{folder_name}/{file}' for file in maps if file.endswith(('.jpg', '.png'))]  # Sadece resim dosyaları
        return jsonify(maps)
    except FileNotFoundError:
        return jsonify([])

if __name__ == '__main__':
    app.run(debug=True)
