# Simple Encryption
## Use
- Set PUBKEY as Environment variable
- use this.$encrypt("test") to encrypt text with this key



## Generate Keys
```
# Generate private Key -> Keep save and use for decryption
openssl genrsa -out rsa_1024_priv.pem 1024

# Generate public key
openssl rsa -pubout -in rsa_1024_priv.pem -out rsa_1024_pub.pem
```

* replace newlines with "\n" to get a one-liner to use as environment variable


