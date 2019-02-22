var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": "Paillier.jl is a Julia package implementing the basics of the Paillier  partially homomorphic cryptosystem.(Image: Build Status)Based off the sketch  written by Morten Dahl at Snips, and the  python-paillier library written by  N1 Analytics.The homomorphic properties of the paillier crypto system are:Encrypted numbers can be multiplied by a non encrypted scalar.\nEncrypted numbers can be added together."
},

{
    "location": "#Warning-Here-be-dragons.-1",
    "page": "Readme",
    "title": "Warning - Here be dragons.",
    "category": "section",
    "text": "This is rough! Don\'t use for anything serious yet! Not reviewed by a cryptographer.Constant time functions have not been used, so this could be susceptible to timing side channel attacks.We don\'t obfuscate the results of encrypted math operations by default. This is an  optimization copied from python-paillier, however after any homomorphic operation - before sharing an EncryptedNumber or EncryptedArray you must call obfuscate() to secure the ciphertext. Ideally this will occur behind the scenes at serialization time, but this library does not help with serialization (yet)."
},

{
    "location": "#Quick-Example-1",
    "page": "Readme",
    "title": "Quick Example",
    "category": "section",
    "text": "This is using the raw paillier cryptosystem.julia> using Paillier\njulia> pub, priv = generate_paillier_keypair(1024)\njulia> a = encrypt(pub, 10)\njulia> b = encrypt(pub, 50)\njulia> decrypt(priv, a)\n10\njulia> decrypt(priv, a + 5)\n15\njulia> # obfuscate before sharing an encrypted number:\njulia> c = obfuscate(2a + b);\njulia> typeof(c)\nEncryptedNumber\njulia> decrypt(priv, c)\n70"
},

{
    "location": "#Floating-point-encoding-1",
    "page": "Readme",
    "title": "Floating point encoding",
    "category": "section",
    "text": "To work with floating point numbers we follow the encoding scheme of  python-paillier. First create an Encoding that includes the native Julia type, the public key and (optionally) the base to use.julia> keysize = 2048\njulia> publickey, privatekey = generate_paillier_keypair(keysize)\njulia> encoding = Encoding(Float32, publickey)\njulia> a = Float32(π)\njulia> b = 100\njulia> enc1 = encode_and_encrypt(a, encoding)\njulia> decrypt_and_decode(privatekey, enc1)\n3.1415927f0\njulia> enc1.exponent\n-6\njulia> enc2 = encode_and_encrypt(b, encoding)\njulia> enc3 = decrypt_and_decode(privatekey, enc1 + enc2)\njulia> enc3\n103.141594f0\njulia> decrypt_and_decode(privatekey, enc1 - 20.0)\n-16.858408f0There are still rough edges when working with higher precision datatypes such as BigFloat. For now I\'d recommend encoding either Float32 or Float64.  "
},

{
    "location": "#Array-Support-1",
    "page": "Readme",
    "title": "Array Support",
    "category": "section",
    "text": "To avoid wasting space having multiple copies of the same PublicKey I\'ve added an  EncryptedArray type that looks like an array of EncryptedNumber objects, but only stores the underlying ciphertexts and one copy of shared metadata such as the public  key, the encoding and the exponent. julia> publickey, privatekey = generate_paillier_keypair(2048)\njulia> a = [0.0, 1.2e3, 3.14, π]\njulia> encoding = Encoding(Float32, publickey)\njulia> enca = encode_and_encrypt(a, encoding);\njulia> decrypt_and_decode(privatekey, enca)\n4-element Array{Float32,1}:\n    0.0      \n 1200.0      \n    3.1399999\n    3.1415927\njulia> encb = 2 * enca;\njulia> decrypt_and_decode(privatekey, encb)\n4-element Array{Float32,1}:\n    0.0      \n 2400.0      \n    6.2799997\n    6.2831855\njulia> decrypt_and_decode(privatekey, reduce(+, encb))\n2412.5632f0\njulia> enca.is_obfuscated\ntrue\njulia> encb.is_obfuscated\nfalse\njulia> encb = obfuscate(encb);\njulia> encb.is_obfuscated\ntrueSee encryptedarray.jl for the implementation."
},

{
    "location": "#Broadcasting-Support-1",
    "page": "Readme",
    "title": "Broadcasting Support",
    "category": "section",
    "text": "I\'ve made some effort towards supporting multidimensional arrays:julia> x = [[0, 1] [345, 32410] [3, 784564]]\njulia> publickey, privatekey = generate_paillier_keypair(4096)\njulia> encrypted = encode_and_encrypt(x, encoding)\njulia> encrypted.public_key == publickey\ntrue\njulia> typeof(encrypted), size(encrypted)\n(EncryptedArray{BigInt,2}, (2, 3))\njulia> decrypt_and_decode(privatekey, encrypted)\n2×3 Array{Float32,2}:\n 0.0    345.0       3.0\n 1.0  32410.0  784564.0\njulia> decrypt_and_decode(privatekey, [4, 2] .* encrypted .+ 100)\n2×3 Array{Float32,2}:\n 100.0   1480.0  112.0      \n 102.0  64920.0    1.56923e6However not everything works, e.g. the LinearAlgebra.dot function."
},

{
    "location": "#More-Examples-1",
    "page": "Readme",
    "title": "More Examples",
    "category": "section",
    "text": "A number of examples can (eventually) be found here."
},

{
    "location": "autodocs/#Paillier.Encoded",
    "page": "Docstrings",
    "title": "Paillier.Encoded",
    "category": "type",
    "text": "A datatype for a plaintext encoded number. Returned by the encode methods.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Paillier.Encoding",
    "page": "Docstrings",
    "title": "Paillier.Encoding",
    "category": "type",
    "text": "Encoding(::DataType, ::PublicKey)\nEncoding(::DataType, ::PublicKey, base::Int64)\n\nA datatype for describing an encoding scheme.\n\nThe public key is included as the encoding is effected by the maximum representable integer which varies with the public_key. Although I could be convinced to change this.\n\nExamples\n\nSetting a base value is optional:\n\njulia> encoding = Encoding(Float64, public_key, 64)\n\nFull example showing homomorphic operations on floating point numbers:\n\njulia> keysize = 2048\njulia> publickey, privatekey = generate_paillier_keypair(keysize)\njulia> encoding = Encoding(Float32, publickey)\njulia> a = Float32(π)\njulia> enc1 = encode_and_encrypt(a, encoding)\njulia> decrypt_and_decode(privatekey, enc1)\n3.1415927f0\njulia> enc1.exponent\n-6\njulia> b = 100\njulia> enc2 = encode_and_encrypt(b, encoding)\njulia> decrypt_and_decode(privatekey, enc1 + enc2)\n103.141594f0\njulia> decrypt_and_decode(privatekey, enc1 - 20.0)\n-16.858408f0\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Paillier.Encrypted",
    "page": "Docstrings",
    "title": "Paillier.Encrypted",
    "category": "type",
    "text": "Encrypted(ciphertext, public_key)\n\nAn Encrypted is the Paillier.jl library\'s low level encrypted type. This simple object that includes the ciphertext, public_key and tracks whether obfuscation has occurred (assumed as false if not provided).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Paillier.EncryptedArray",
    "page": "Docstrings",
    "title": "Paillier.EncryptedArray",
    "category": "type",
    "text": "EncryptedArray\n\nA vector version of EncryptedNumber.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Paillier.EncryptedNumber",
    "page": "Docstrings",
    "title": "Paillier.EncryptedNumber",
    "category": "type",
    "text": "EncryptedNumber(::Encrypted, ::Encoding, exponent::Int64)\nEncryptedNumber(::Encoded, ::PublicKey)\n\nDatatype for representing an encrypted (and Encoded) number.\n\nExamples\n\njulia> EncryptedNumber(encoded_number, public_key)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Paillier.Paillier",
    "page": "Docstrings",
    "title": "Paillier.Paillier",
    "category": "module",
    "text": "module Paillier\n\nExamples\n\njulia> pub, priv = generate_paillier_keypair(1024)\njulia> c = encrypt(pub, 10)\njulia> decrypt(priv, add(pub, c, encrypt(pub, 20)))\n30\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Paillier.decode",
    "page": "Docstrings",
    "title": "Paillier.decode",
    "category": "function",
    "text": "decode(encoded::Encoded)\ndecode(encoded::BigInt, exponent::Int64, encoding::Encoding)\n\nThe inverse of encode, computes the decoding of the Encoded integer representation.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Paillier.decrease_exponent_to",
    "page": "Docstrings",
    "title": "Paillier.decrease_exponent_to",
    "category": "function",
    "text": "decrease_exponent_to(enc, new_exponent)\n\nCompute an EncryptedNumber with the same value but a lower exponent.\n\nWe multiply the encoded value by the Encoding.base and decrement the EncryptedNumber.exponent - such that the decoded value remains the same.\n\nWe can keep ratcheting down the EncryptedNumber\'s exponent until the encoded integer overflows. This overflow may not be caught.\n\nThere is also a (much faster) version that acts on EncodedNumbers.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Paillier.decrypt",
    "page": "Docstrings",
    "title": "Paillier.decrypt",
    "category": "function",
    "text": "decrypt(private_key, ciphertext::Ciphertext)\ndecrypt(private_key, ciphertext::Encrypted)\n\nThe inverse of encrypt, uses the private_key to decrypt an encrypted message (ciphertext) to a positive integer less than public_key.n. The result is always a BigInt.\n\nExamples\n\njulia> publickey, privatekey = generate_paillier_keypair(128)\njulia> ciphertext = encrypt(publickey, 10)\njulia> decrypt(privatekey, ciphertext)\n10\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Paillier.decrypt_and_decode",
    "page": "Docstrings",
    "title": "Paillier.decrypt_and_decode",
    "category": "function",
    "text": "decrypt_and_decode(privatekey::PrivateKey, enc::EncryptedNumber)\n\nDecrypt an EncryptedNumber using the given PrivateKey and decode it using the EncryptedNumber\'s encoding.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Paillier.encode",
    "page": "Docstrings",
    "title": "Paillier.encode",
    "category": "function",
    "text": "encode(::Number, ::Encoding)\nencode(::Number, ::Encoding, exponent::Int64)\n\nEncode a number but don\'t encrypt it for the given Encoding - producing an Encoded. See encode_and_encrypt for a method that also encrypts. If the exponent is not provided we attempt to match the precision of the passed julia type. See decode to go the other direction.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Paillier.encode_and_encrypt",
    "page": "Docstrings",
    "title": "Paillier.encode_and_encrypt",
    "category": "function",
    "text": "encode_and_encrypt(plaintext::Number, encoding::Encoding)\n\nEncode the plaintext number using given encoding and encrypt using the PublicKey from the encoding.\n\n\n\n\n\nencode_and_encrypt(xs::Array{<:Number}, encoding::Encoding)\nencode_and_encrypt(xs::Array{<:Number}, encoding::Encoding, exponent::Int64)\n\nCreate an EncryptedArray of your plaintext numbers.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Paillier.encrypt",
    "page": "Docstrings",
    "title": "Paillier.encrypt",
    "category": "function",
    "text": "encrypt(public_key, message)\n\nEncrypt a message with a given public key and return an Encrypted. The message must be a positive integer under public_key.n - following Julia\'s Int64 type larger numbers will wrap around and not throw an error.\n\nSee decrypt if you\'d like your original message back.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Paillier.encrypt_raw",
    "page": "Docstrings",
    "title": "Paillier.encrypt_raw",
    "category": "function",
    "text": "encrypt_raw(public_key, message)\n\nInternal version of encrypt that returns the raw Ciphertext - which is just a BigInt. Note this includes obfuscation so a directly encrypted unsigned integer is safe to share.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Paillier.find_ea",
    "page": "Docstrings",
    "title": "Paillier.find_ea",
    "category": "function",
    "text": "A = find_ea(As) returns the first EncryptedArray among the arguments.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Paillier.max_int",
    "page": "Docstrings",
    "title": "Paillier.max_int",
    "category": "function",
    "text": "max_int(::PublicKey)\n\nThe maximum signed integer for our encoding system. We use a full third of the range for overflow detection.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Paillier.obfuscate",
    "page": "Docstrings",
    "title": "Paillier.obfuscate",
    "category": "function",
    "text": "obfuscate(encrypted)\n\nSalt the Encrypted with a new random number. Required before sharing ciphertexts with another party.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Paillier.CiphertextPaillier.EncodedPaillier.EncodingPaillier.EncryptedPaillier.EncryptedArrayPaillier.EncryptedNumberPaillier.PaillierPaillier.PrivateKeyPaillier.PublicKeyPaillier._encrypt_encodedPaillier._multiply_via_inversionPaillier.decodePaillier.decrease_exponent_toPaillier.decryptPaillier.decrypt_and_decodePaillier.encodePaillier.encode_and_encryptPaillier.encryptPaillier.encrypt_rawPaillier.evalPaillier.find_eaPaillier.generate_paillier_keypairPaillier.includePaillier.intrepPaillier.match_exponentsPaillier.max_intPaillier.n_bit_random_numberPaillier.nbit_prime_of_sizePaillier.obfuscatePaillier.random_lt_nPaillier.raw_addPaillier.raw_multiply"
},

]}
