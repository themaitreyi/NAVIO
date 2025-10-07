import requests

# Test API health endpoint
try:
    response = requests.get('http://localhost:5173/api/health', timeout=5)
    print(f"Frontend API Health: {response.status_code}")
    print(f"Response: {response.text}")
except Exception as e:
    print(f"Frontend API Error: {e}")

# Test direct backend health endpoint
try:
    response = requests.get('http://localhost:5000/api/health', timeout=5)
    print(f"Backend API Health: {response.status_code}")
    print(f"Response: {response.text}")
except Exception as e:
    print(f"Backend API Error: {e}")

# Test devices endpoint
try:
    response = requests.get('http://localhost:5173/api/devices', timeout=5)
    print(f"Frontend Devices: {response.status_code}")
    if response.status_code == 200:
        print(f"Devices data: {len(response.json().get('devices', []))} devices")
except Exception as e:
    print(f"Frontend Devices Error: {e}")
