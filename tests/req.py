import requests

url = 'https://192.168.1.20:8000/group'
dados = {
    'name': 'valor1',
    'group_id': 'valor2'
}

resposta = requests.post(url, json=dados)

print(resposta.status_code)  # Código de status da resposta
print(resposta.json())       # Dados da resposta em formato JSON
