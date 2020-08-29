#!/usr/bin/python3.7

# Credit to https://cryptography.io/en/latest/x509/tutorial/#creating-a-self-signed-certificate

from cryptography.hazmat.backends import default_backend
from cryptography.hazmat.primitives.asymmetric import rsa
from cryptography.hazmat.primitives import serialization
import datetime
from getpass import getpass
from cryptography import x509
from cryptography.x509.oid import NameOID
from cryptography.hazmat.primitives import hashes

keyLocation = input('Enter Location to Store Key: ')
# passPhrase = getpass('Enter encryption passphrase: ')

key = rsa.generate_private_key(
    public_exponent=65537, key_size=2048, backend=default_backend())

with open(keyLocation + "/key.pem", "wb") as f:
  f.write(key.private_bytes(
      encoding=serialization.Encoding.PEM,
      format=serialization.PrivateFormat.TraditionalOpenSSL,
      encryption_algorithm=serialization.NoEncryption()),
  )
# excluding option encryption_algorithm=serialization.BestAvailableEncryption(bytes(passPhrase, 'utf-8'))

certLocation = input('Enter Location to Store Self-Signed Certificate: ')

subject = issuer = x509.Name([
    x509.NameAttribute(NameOID.COUNTRY_NAME, u"US"),
    x509.NameAttribute(NameOID.STATE_OR_PROVINCE_NAME, u"Colorado"),
    x509.NameAttribute(NameOID.LOCALITY_NAME, u"Fort Collins"),
    x509.NameAttribute(NameOID.ORGANIZATION_NAME, u"Test - Personal Finance Manager"),
])
cert = x509.CertificateBuilder().subject_name(
    subject
).issuer_name(
    issuer
).public_key(
    key.public_key()
).serial_number(
    x509.random_serial_number()
).not_valid_before(
    datetime.datetime.utcnow()
).not_valid_after(
    # Our certificate will be valid for 10 days
    datetime.datetime.utcnow() + datetime.timedelta(days=10)
).add_extension(
    x509.SubjectAlternativeName([x509.DNSName(u"localhost")]),
    critical=False,
# Sign our certificate with our private key
).sign(key, hashes.SHA256(), default_backend())
# Write our certificate out to disk.
with open(certLocation + "/certificate.pem", "wb") as f:
    f.write(cert.public_bytes(serialization.Encoding.PEM))
