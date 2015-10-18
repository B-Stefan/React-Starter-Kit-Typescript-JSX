#React-Starter-Kit-Typescript

This repository contains a prototype of a starter kit for react and typescript.
The reson for this template is that I think the current starter kits have so many different default setups like testing, travis
## Getting started

Requirements 

* [NodeJs](https://nodejs.org/en/)
* [Bower](https://bower.io)  (npm install bower -g)

To use this starter kit follow the instructions: 

1. Clone repository ``` git clone  ```
2. Run npm install ``` npm install ``` to install al necessary npm files 
3. Run npm dev ``` npm run dev  ``` to start the watch mode 
4. Your server is up and running at http://localhost:3000

Other npm commands are: 

``` 
  npm run [build | dev  | bundle | gulp | tsd | test]

```


## Used technologies

* React@0.14
* Typescript@1.6
* Gulp
* Bable / ES6

![Image](/docs/RequestResponseDiagram.png?raw=true)


## Example React component in Typescript with JSX support 


```typescript

  import * as React from "react"


  export default class About extends React.Component<any,any> {

      constructor(props,context){
          super(props,context);
          console.log("Here I'm the About-Page")
      }

      public render(){
          return (
              <span>Here is my about page</span>
          )
      }

  }

```
##Build-Procsess 

The following diagram illustrate the current build process 

![Image](/docs/BuildProcess.png?raw=true)


##Folders
 
### web
Contains all source file, your working folder if you want to modify the application 

 
### web-gulp
Contains all [gulp](http://gulpjs.com/) build scripts written in [ES6](https://github.com/lukehoban/es6features)


### web-tmp 
This folder contains all compiled js, css and other files. 
**Dont modify your files in this folder this folder will be deleted if you restart your watch server**

## Todos

There are plenty of jobs to do. For example to improve the build process.

- [ ] Improve the build process (The watch mode is not realy stable)
- [ ] Add minification for images, styles, html and css in the bundle and build process 
- [ ] Mode docs 
