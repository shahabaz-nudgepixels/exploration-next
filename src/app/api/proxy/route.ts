import { NextResponse } from 'next/server';
// import axios from 'axios';
// import { HttpsProxyAgent } from 'https-proxy-agent'
// import fs from 'fs';
// import { PuppeteerExtra } from 'puppeteer-extra';
// const injectionScript = `
//                 console.log("Hello from iframe 1");
//                 const storedSelections = JSON.parse(localStorage.getItem("selections")) || [];
//                 // Remove DOMContentLoaded event since we'll call loadSelections directly
//                 function init() {
//                     console.log("Initializing selection handlers");
//                     loadSelections(); // Load stored highlights immediately
//                     document.addEventListener("mouseup", handleSelection);
//                     document.addEventListener("keyup", handleSelection);
//                 }

//                 function handleSelection() {
//                     const selection = window.getSelection();
//                     if (!selection.rangeCount) return;

//                     const range = selection.getRangeAt(0);
//                     if (range.collapsed) return; // Ignore empty selection

//                     const selectedText = selection.toString();
//                     if (!selectedText.trim()) return;
//                     console.log("handleSelection selectedText", selectedText);

//                     const startOffset = range.startOffset;
//                     const endOffset = range.endOffset;
//                     const parentElement = range.commonAncestorContainer.parentElement;
                    
//                     const highlightData = {
//                         text: selectedText,
//                         parentXPath: getXPath(parentElement),
//                         startOffset,
//                         endOffset,
//                     };

//                     applyHighlight(highlightData); // Highlight new selection

//                     storedSelections.push(highlightData);
//                     localStorage.setItem("selections", JSON.stringify(storedSelections)); // Save to localStorage

//                     selection.removeAllRanges(); // Clear selection
//                 }

//                 function applyHighlight(highlightData) {
//                     const parentElement = getElementByXPath(highlightData.parentXPath);
//                     if (!parentElement) return;

//                     const innerHTML = parentElement.innerHTML;
//                     const newHTML = innerHTML.replace(
//                         highlightData.text,
//                         \`<span style="background-color: yellow;">\${highlightData.text}</span>\`
//                     );

//                     parentElement.innerHTML = newHTML;
//                 }

//                 function loadSelections() {
//                     console.log("Loading selections");
//                     storedSelections.forEach(applyHighlight);
//                 }

//                 // Helper functions for XPath
//                 function getXPath(element) {
//                     if (element.id !== "") return \`id("\${element.id}")\`;
//                     if (element === document.body) return "/html/body";

//                     let ix = 0;
//                     const siblings = element.parentNode.childNodes;
//                     for (let i = 0; i < siblings.length; i++) {
//                         const sibling = siblings[i];
//                         if (sibling === element) return \`\${getXPath(element.parentNode)}/\${element.tagName.toLowerCase()}[\${ix + 1}]\`;
//                         if (sibling.nodeType === 1 && sibling.tagName === element.tagName) ix++;
//                     }
//                 }

//                 function getElementByXPath(xpath) {
//                     return document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
//                 }
//                 init();
// `;
// const USER_AGENT =
//     'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.83 Safari/537.36,gzip(gfe)'

// const axiosInstance = axios.create({
//     httpsAgent: new HttpsProxyAgent("https://spz2fdyqws:kkPmLxn7=c8Qhz2fC2@gate.smartproxy.com:10001"),
//     headers: {
//         'User-Agent': USER_AGENT
//     }
// })

export async function GET(request: Request) {
//     let browser;
//     try {
//         const { searchParams } = new URL(request.url);
//         const url = searchParams.get('url');

//         if (!url) {
//             return NextResponse.json({ error: 'URL is required' }, { status: 400 });
//         }
//         const puppeteer: PuppeteerExtra = require("puppeteer-extra");
//         const stealthPlugin = require("puppeteer-extra-plugin-stealth");
//         console.log("stealthPlugin: ", stealthPlugin({}))
//         puppeteer.use(stealthPlugin());
//         browser = await puppeteer
//             .use(stealthPlugin())
//             .launch({
//                 headless: true,
//                 headers: {
//                     'User-Agent': USER_AGENT,
//                     'accept-language': 'en-US,en;q=0.9',
//                 },

//                 args: [
//                     // '--no-sandbox',
//                     // '--disable-setuid-sandbox',
//                     // '--proxy-server=http://spz2fdyqws:kkPmLxn7=c8Qhz2fC2@gate.smartproxy.com:10001',
//                 ],
//                 defaultViewport: null,
//                 // ignoreDefaultArgs: ['--enable-automation'],
//             })
//         const page = await browser.newPage();
//         // Intercept requests and remove restrictive headers
//         // await page.setRequestInterception(true);
//         // page.on('request', (request) => {
//         //     request.continue();
//         // });

//         // page.on('response', async (response) => {
//         //     const headers = response.headers();
//         //     delete headers['x-frame-options'];
//         //     delete headers['content-security-policy'];
//         // });

//         // Step 2: Block further redirects (only allow initial navigation)
//         // page.on("request", async (request) => {
//         //     if (request.isNavigationRequest() && request.frame() === page.mainFrame()) {
//         //         console.log("🚫 Blocked navigation to:", request.url());
//         //         request.abort(); // Stop navigation request
//         //     } else {
//         //         request.continue(); // Allow other requests (e.g., images, styles)
//         //     }
//         // });
//         await page.goto(url, {
//             waitUntil: 'networkidle0',
//             timeout: 60000
//         });

//         // Optional: Inject a <base> tag to help resolve relative URLs
//         await page.evaluate(() => {
//             if (!document.querySelector('base')) {
//                 const base = document.createElement('base');
//                 base.href = window.location.origin;
//                 document.head.insertBefore(base, document.head.firstChild);
//             }
//         });


//         // Remove this script from the web page which is having content document.domain = document.domain
//         // await page.evaluate(() => {
//         //     Object.defineProperty(window, 'parent', {
//         //         get() {
//         //             return window; // Make the site think it’s not inside an iframe
//         //         },
//         //     });

//         //     Object.defineProperty(document, 'domain', {
//         //         get() {
//         //             return 'example.com'; // Fake the expected domain
//         //         },
//         //         set(value) {
//         //             console.log('Blocked attempt to change document.domain:', value);
//         //         },
//         //     });
//         // });

//         await page.evaluate(() => {
//             // Select and remove all script tags inside other than script type css
//             document.querySelectorAll("script:not([type='text/css'])").forEach((script) => {
//                 script.remove();
//                 console.log("Removed script:", script);
//             });
//         });

//         // Pass injectionScript as a parameter to evaluate
//         await page.evaluate((scriptContent) => {
//             const script = document.createElement('script');
//             script.innerHTML = scriptContent;
//             document.head.appendChild(script);
//         }, injectionScript);

//         // await page.setJavaScriptEnabled(false);
//         console.log("bypassing csp");
//         await page.setBypassCSP(true);
//         console.log("bypassing csp done");
//         const content = await page.content();
//         fs.writeFileSync("content.html", content);
//         await page.close();
//         return new NextResponse(content, {
//             headers: {
//                 'User-Agent': USER_AGENT,
//                 'Content-Type': 'text/html'
//                 // 'Access-Control-Allow-Origin': '*',
//                 // 'Content-Security-Policy': "",
//                 // just domain name
//             }
//         });

//     } catch (error) {
//         console.error('Error fetching content:', error);
        return NextResponse.json({ error: 'Failed to fetch content' }, { status: 500 });
//     }
//     finally {
//         if (browser) {
//             await browser.close();
//         }
//     }
}

// // export async function GET(request: Request) {
// //     try {
// //         const { searchParams } = new URL(request.url);
// //         const url = searchParams.get('url');

// //         if (!url) {
// //             return NextResponse.json({ error: 'URL is required' }, { status: 400 });
// //         }

// //         const response = await axiosInstance.get(url);
// //         const html = response.data;
// //         // Fix relative links for CSS & JS
// //         const body = html.replace(/href="\/([^"]+\.css)"/g, `href="${new URL('$1', url).href}"`);
// //         // Inject our script into the HTML
// //         const modifiedHtml = body.replace(
// //             '</body>',
// //             `<script>${injectionScript}</script></body>`
// //         );

// //         return new NextResponse(modifiedHtml, {
// //             headers: {
// //                 'Content-Type': 'text/html'
// //             }
// //         });
// //     } catch (error) {
// //         return NextResponse.json({ error: 'Failed to fetch content' }, { status: 500 });
// //     }
// // } 