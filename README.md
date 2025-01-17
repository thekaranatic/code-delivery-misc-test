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
