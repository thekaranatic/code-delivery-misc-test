> PersonalNote: Refer TODO in `Issues` of this repo

### Tried importing the code through GitHub raw content before I explore `jsDelivr` or `cdnjs`
- Resource URL: `https://raw.githubusercontent.com/thekaranatic/code-delivery-misc-test/refs/heads/main/codeDeliveryTest.js`
- Turns out that Github raw content sends a `plaintext` mime type through response headers
- This is not helping to import the function from the imported resource (js file)

#### Errors & warnings received:
```plaintext
The resource from “https://raw.githubusercontent.com/thekaranatic/code-delivery-misc-test/refs/heads/main/codeDeliveryTest.js”
was blocked due to MIME type (“text/plain”) mismatch (X-Content-Type-Options: nosniff)
```

```plaintext
Loading failed for the <script> with source “https://raw.githubusercontent.com/thekaranatic/code-delivery-misc-test/refs/heads/main/codeDeliveryTest.js”.
```
### Turns out that response headers need to send 'application/javascript' mime type so that we can import the function
 - An HTTP `GET` request on raw text & JS delivery shows the distinction in  `CONTENT TYPE` response:

| HTTP Headers - Raw Text | HTTP Headers - JS |
| --- | ---|
| ![image](https://github.com/user-attachments/assets/eb33b470-b8a5-4d0f-a763-55cfb838dd5d) | ![image](https://github.com/user-attachments/assets/1d34e640-e145-484e-93e3-dbfa97a6e65f) |
| Body (payload) | Body (payload) |
| ![image](https://github.com/user-attachments/assets/d2ae0add-e8b5-4559-8402-d9640bcd4a4c) | ![image](https://github.com/user-attachments/assets/1a536445-2c41-4c08-97d3-5619945366b0) |

- If you notice that the colored text (js body) doesn't contain `default` block in switch statement as it does in the raw text version. This is due to the latest update of the file.

### Now the next task is to figure out how to ensure the CDN delivers latest version of the code

