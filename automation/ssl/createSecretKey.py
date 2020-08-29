#!/usr/bin/python3.7

raise Exception('Work In Progress!!')

from cryptography.hazmat.primitives.ciphers.aead import AESGCM

key = AESGCM.generate_key(bit_length=128)
keyLocation = input('Enter Location to Store Key: ')

with open(keyLocation + '/secret.key', 'wb') as f:
  f.write(key)
