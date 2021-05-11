<script>
const jsonwebtoken = require('jsonwebtoken')
const generateJWT = function generateJWT(payload, privateKey, algorithm) {
  return jsonwebtoken.sign(payload, privateKey, { algorithm })
}

export default {
  data() {
    const defaultConfig = {
      payload: {
        exp: 12 * 60 * 60,
        iss: 'asdfasdfasdf@AdobeOrg',
        sub: 'asdfasdfas@techacct.adobe.com',
        aud: `https://ims-na1.adobelogin.com/c/asasdfasf`,
      },
      algorithm: 'RS256',
      privateKey: `-----BEGIN RSA PRIVATE KEY-----
MIIEogIBAAKCAQEAnzyis1ZjfNB0bBgKFMSvvkTtwlvBsaJq7S5wA+kzeVOVpVWw
kWdVha4s38XM/pa/yr47av7+z3VTmvDRyAHcaT92whREFpLv9cj5lTeJSibyr/Mr
m/YtjCZVWgaOYIhwrXwKLqPr/11inWsAkfIytvHWTxZYEcXLgAXFuUuaS3uF9gEi
NQwzGTU1v0FqkqTBr4B8nW3HCN47XUu0t8Y0e+lf4s4OxQawWD79J9/5d3Ry0vbV
3Am1FtGJiJvOwRsIfVChDpYStTcHTCMqtvWbV6L11BWkpzGXSW4Hv43qa+GSYOD2
QU68Mb59oSk2OB+BtOLpJofmbGEGgvmwyCI9MwIDAQABAoIBACiARq2wkltjtcjs
kFvZ7w1JAORHbEufEO1Eu27zOIlqbgyAcAl7q+/1bip4Z/x1IVES84/yTaM8p0go
amMhvgry/mS8vNi1BN2SAZEnb/7xSxbflb70bX9RHLJqKnp5GZe2jexw+wyXlwaM
+bclUCrh9e1ltH7IvUrRrQnFJfh+is1fRon9Co9Li0GwoN0x0byrrngU8Ak3Y6D9
D8GjQA4Elm94ST3izJv8iCOLSDBmzsPsXfcCUZfmTfZ5DbUDMbMxRnSo3nQeoKGC
0Lj9FkWcfmLcpGlSXTO+Ww1L7EGq+PT3NtRae1FZPwjddQ1/4V905kyQFLamAA5Y
lSpE2wkCgYEAy1OPLQcZt4NQnQzPz2SBJqQN2P5u3vXl+zNVKP8w4eBv0vWuJJF+
hkGNnSxXQrTkvDOIUddSKOzHHgSg4nY6K02ecyT0PPm/UZvtRpWrnBjcEVtHEJNp
bU9pLD5iZ0J9sbzPU/LxPmuAP2Bs8JmTn6aFRspFrP7W0s1Nmk2jsm0CgYEAyH0X
+jpoqxj4efZfkUrg5GbSEhf+dZglf0tTOA5bVg8IYwtmNk/pniLG/zI7c+GlTc9B
BwfMr59EzBq/eFMI7+LgXaVUsM/sS4Ry+yeK6SJx/otIMWtDfqxsLD8CPMCRvecC
2Pip4uSgrl0MOebl9XKp57GoaUWRWRHqwV4Y6h8CgYAZhI4mh4qZtnhKjY4TKDjx
QYufXSdLAi9v3FxmvchDwOgn4L+PRVdMwDNms2bsL0m5uPn104EzM6w1vzz1zwKz
5pTpPI0OjgWN13Tq8+PKvm/4Ga2MjgOgPWQkslulO/oMcXbPwWC3hcRdr9tcQtn9
Imf9n2spL/6EDFId+Hp/7QKBgAqlWdiXsWckdE1Fn91/NGHsc8syKvjjk1onDcw0
NvVi5vcba9oGdElJX3e9mxqUKMrw7msJJv1MX8LWyMQC5L6YNYHDfbPF1q5L4i8j
8mRex97UVokJQRRA452V2vCO6S5ETgpnad36de3MUxHgCOX3qL382Qx9/THVmbma
3YfRAoGAUxL/Eu5yvMK8SAt/dJK6FedngcM3JEFNplmtLYVLWhkIlNRGDwkg3I5K
y18Ae9n7dHVueyslrb6weq7dTkYDi3iOYRW8HRkIQh06wEdbxt0shTzAJvvCQfrB
jg/3747WSsf/zBTcHihTRBdAv6OmdhV4/dD5YBfLAkLrd+mX7iE=
-----END RSA PRIVATE KEY-----`,
      publicKey: `-----BEGIN PUBLIC KEY-----
MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAnzyis1ZjfNB0bBgKFMSv
vkTtwlvBsaJq7S5wA+kzeVOVpVWwkWdVha4s38XM/pa/yr47av7+z3VTmvDRyAHc
aT92whREFpLv9cj5lTeJSibyr/Mrm/YtjCZVWgaOYIhwrXwKLqPr/11inWsAkfIy
tvHWTxZYEcXLgAXFuUuaS3uF9gEiNQwzGTU1v0FqkqTBr4B8nW3HCN47XUu0t8Y0
e+lf4s4OxQawWD79J9/5d3Ry0vbV3Am1FtGJiJvOwRsIfVChDpYStTcHTCMqtvWb
V6L11BWkpzGXSW4Hv43qa+GSYOD2QU68Mb59oSk2OB+BtOLpJofmbGEGgvmwyCI9
MwIDAQAB
-----END PUBLIC KEY-----`,
    }
    const defaultJWT = generateJWT(
      defaultConfig.payload,
      defaultConfig.privateKey,
      defaultConfig.algorithm
    )

    return {
      jwt: defaultJWT,
      jwtPayload: defaultConfig.payload,
      jwtAlgorithm: defaultConfig.algorithm,
      jwtPrivateKey: defaultConfig.privateKey,
      jwtError: 'Generated JWT goes here',
    }
  },

  methods: {
    updateJWT: function updateJWT(e) {
      try {
        this.jwt = generateJWT(
          this.jwtPayload,
          this.jwtPrivateKey,
          this.jwtAlgorithm
        )
      } catch (err) {
        this.jwt = null
        this.jwtError =
          'ERROR generating JWT! The provided private key is likely invalid. See stacktrace below:\n\n' +
          '=============================================================\n' +
          err.stack +
          '\n' +
          '=============================================================\n'
      }
    },
  },
}
</script>

<template>
  <div class="jwt-generator">
    <h1>JWT {{ jwtAlgorithm }} generator</h1>
    <br />

    <b-container fluid>
      <b-input-group prepend="JWT Payload">
        <b-form-textarea
          id="textarea-jwt-payload"
          v-model="jwtPayload"
          placeholder="JWT payload goes here"
          rows="2"
          max-rows="15"
          @input="updateJWT"
        >
        </b-form-textarea>
      </b-input-group>
      <br />

      <b-input-group prepend="JWT Private Key">
        <b-form-textarea
          id="textarea-jwt-private-key"
          v-model="jwtPrivateKey"
          placeholder="JWT private key goes here"
          rows="2"
          max-rows="5"
          @input="updateJWT"
        >
        </b-form-textarea>
      </b-input-group>
      <br />

      <b-input-group prepend="Generated JWT">
        <b-form-textarea
          id="textarea-jwt-generated"
          v-model="jwt"
          :placeholder="jwtError"
          rows="8"
          max-rows="50"
        >
        </b-form-textarea>
      </b-input-group>
    </b-container>

    <br /><br /><br />
  </div>
</template>

<style>
.jwt-generator textarea {
  font-family: monospace;
}
</style>
