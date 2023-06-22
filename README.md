# Javascript-ES6
Learning JavaScript ES6  Features
JavaScript ES6 brings new syntax to optimize code and make it more readable. 
ES6 introduces us to many great features like arrow functions, template strings, class destruction, Modules… and more. Like
   <ul>
    <li>  const and let</li>
     <li> Arrow functions </li>
     <li> Template Literals </li>
     <li> Promises </li>
     <li> Classes </li>
     <li> Import and export </li>
     <li> Array and object destructing </li>
     <li> Default parameters </li>
     <li> Rest parameter and Spread operator </li>
   </ul>

#  How to Setup ES6 Development Environment on local

1. Open command promt and create project directory mkdir js6-exapmle
2. cd js6-example
3. Run npm init . It will generate package.json which will look like this.
               {
                 "name": "js6-example",
                 "version": "1.0.0",
                 "description": "",
                 "main": "index.js",
                 "author": "",
                 "license": "ISC",
               }
4. Install webpack globally.
      npm install -g webpack
   
6. Install a webpack locally
   npm install webpack --save-dev

7. Create an index.html. Add following code -

      <!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
      </head>
      <body>
      </body>
      </html>

8. Include <script src="bundle.js" type="text/javascript"></script> in body tag of your index.html

9.  Create a new directory app

10.  Add main.js file in the app directory.
11.  Create a webpack configuration file in a root folder named webpack.config.js.
      Add following code in this -
     module.exports = {
    entry: ['./app/main.js'],
    output: {
        filename: 'bundle.js'
    }
}; 

9. Update the package.json file’s scripts property.
    {
        "name": "js6",
        "version": "1.0.0",
        "description": "",
        "main": "index.js",
        "scripts": {
          "build": "webpack"
        },
        "author": "KRUNAL LATHIYA",
        "license": "ISC"
   }

10. npm run build
11. Now open an index.html file in a browser, and you will see in the Chrome developer tools,  inside the console panel, there is logging by saying.
  “Inside main.js.”
    
 

 
