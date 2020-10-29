---
title: Getting consistent Encryption in Node / PHP / Browser and openSSL
published: true
datePublished: 1603967203286
author: lwlx
authorTwitter: InfoSecx0
authorPhoto: /profile.jpg
tags:
  - encryption
  - decryption
  - openssl
  - nodejs
  - php
thumbnailPhoto: /crypto_thumb.jpg
bannerPhoto: /crypto.jpg
canonicalUrl: https://dev.lwlx.xyz/
---

I recently set out to build my personal website — the one you're reading now, as it happens!

Surprisingly, it was much harder than expected to put together a "tech stack" that met my criteria. My criteria are pretty straightforward; I would expect most React devs to have a similar list. Yet it was surprisingly hard to put all these pieces together.

Given the lack of a decent out-of-the-box solution, I worry that many developers are settling for static-site generators that place limits on the interactivity and flexibility of your website. We can do better.

> Clone the repo here to get started with this setup: https://github.com/Lawlez/dev.lwlx.xyz

Let's quickly run through my list of design goals:

### Using Node JS Crypto module

I want to build the site with React and TypeScript. I love them both wholeheartedly, I use them for my day job, and they're gonna be around for a long time. Plus writing untyped JS makes me feel dirty.

```
const crypto = require('crypto')

/**********************************************************************
*
*        DECRYPTION MODULE FOR USE INSIDE NODE.JS                     *
*
***********************************************************************/

const encryption = (data = 'TestString {} Héllöüä') => {

    const secretPhrase = crypto.randomBytes(16).toString('hex')
    const salt = crypto.randomBytes(128 / 8).toString('hex')
    //here we generate the key and give it back as a string, we use 100k iterations
    //as suggested in best practices
    //We can use the key multiple times to encrypt multiple things(-30GB), we just cant use
    //the same initialization vector twice
    //the key for aes-256 needs to be 256 bits which equals 32 bytes or 32 characters
    const configKey = crypto.pbkdf2Sync(secretPhrase, salt, 100000, 32, 'sha256').toString('hex').substr(0, 32)
    //create unique IV for each encryption, the key can be reused. IV needs to always be 16 bytes
    const IV = crypto.randomBytes(16)

    //create ciphers for each encryption using the shared key and the unuique IV
    const projectConfigCipher = crypto.createCipheriv('aes-256-cbc', configKey, IV.toString('hex').substr(0,16)

    //encripting the storage location using the prepared cipher
    const encrypted = Buffer.concat([configStorageCipher.update(
        'STORAGE', 'utf8'
    ), configStorageCipher.final()]).toString('hex')

	return encrypted

}
```

### Using browserify-aes's node crypto like implementation inside the Browser

If it's obnoxious to write new blog posts, I won't do it. That's a regrettable law of the universe. Even writing blog posts with plain HTML — just a bunch of `<p>` tags in a div — is just annoying enough to bug me. The answer: Markdown of course!

```
import crypto from 'browserify-aes'

/**********************************************************************
*
*        DECRYPTION MODULE FOR USE IN BROWSER DURING RUNTIME          *
*
***********************************************************************/
const decrypt = hash => {
    const hash = hash.data
    //get IV from input, make sure its no longer than 16 bytes
    const IV = hash.IV

    //ein neuer cipher wird vorbereitet, mittels aes256, unserem 256 bit KEY und dem config IV
    const decipher = crypto.createDecipheriv(
        'aes256',
        process.env.APP_CONFIG_KEY.substr(0, 32),
       IV,
    )

    //der hash wird nun decrypted mittels dem zuvor erstellten cipher
    const decrypted = Buffer.concat([decipher.update(
         Buffer.from(hash, 'hex'),
     ), decipher.final()]).toString()

   return JSON.parse(decrypted)
}
```

### ENCRYPTION & DECRYPTION MODULE FOR PHP7+ USING OPENSSL

As much as I love the Jamstack, it doesn't cut it from an SEO perspective. Many blogs powered by a "headless CMS" require two round trips before rendering the blog content (one to fetch the static JS bundle and another to fetch the blog content from a CMS). This degrades page load speeds and user experience, which accordingly degrades your rankings on Google.

```
/**********************************************************************
*
*        ENCRYPTION & DECRYPTION MODULE FOR PHP7+ USING OPENSSL       *
*
***********************************************************************/

class AESEncryption {

	//key length should be 256 bits for aes 256 this means we use a string with 32 bytes
	public static $key = "5f08e0ec585393a8e2ca8f0a1a0ae752";

	 //iv length should be always be 128 bit / 16 bytes
	public static $iv = "05d387e7f773035a";

	 // The AES uses a block size of sixteen octets (128 bits)
	public static $Method = 'AES-256-CBC';

	/**
	  * use the AES to encrypt plaintext data and return a base 64 string
	 *
	 * $key
	 */
	public static function encrypt($cleartext,$key = ''){

		$key = empty($key) ? self::$key : $key;

		$encrypted = openssl_encrypt($cleartext, self::$Method, $key, OPENSSL_RAW_DATA, self::$iv);

		return base64_encode($encrypted);

	}

	/**
	  * use the AES to decrypt a base 64 string into plaintext
	 *
	 * $key
	 */
	public static function decrypt($encrypted,$key = ''){

		$key = empty($key) ? self::$key : $key;

		$encrypted = base64_decode($encrypted);

		$decrypted = openssl_decrypt($encrypted, self::$Method, $key, OPENSSL_RAW_DATA, self::$iv);

		return trim($decrypted);
	}
}
```

### Using openssl for use in CLI

I describe my final architecture design below, along with my rationale for each choice. I distilled this setup into a website starter/boilerplate available here: https://github.com/Lawlez/dev.lwlx.xyz. Below, I allude to certain files/functions I implemented; to see the source code of these, just clone the repo `git clone git@github.com:vriad/devii.git`

```bash
#########################################################################################
#                                                                                       #
#               ENCRYPTION FOR CLI IN / MACOS / LINUX / WINDOWS                         #
#                                                                                       #
#########################################################################################

#encrypt with key & IV but no salt
cat config.json | openssl aes-256-cbc -iv $(cat iv)  -K $(cat key) -A -nosalt -base64

#decrypt with key IV and base64
echo "encryptedString" | openssl aes-256-cbc -d -iv $(cat iv)  -K $(cat key) -base64 -A
```

## final solution

I chose to build my site with Next.js. This won't be a surprising decision to anyone who's played with statically-rendered or server-side rendered React in recent years. Next.js is quickly eating everyone else's lunch in this market, especially Gatsby's (sorry Gatsby fans).

<!-- Check out the Next.js documentation [here](https://nextjs.org/docs) to make sure it's the right choice for your project. -->