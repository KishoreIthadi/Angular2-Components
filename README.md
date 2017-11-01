# Angular2-Components

This project consists of angular2 components like pagination, rating etc.

### Examples

<big><pre>
[https://kishoreithadi.github.io/Angular2-Components/](https://kishoreithadi.github.io/Angular2-Components/)
</pre></big>

### GitHub

You can view and download the source code from

<big><pre>
[https://github.com/KishoreIthadi/Angular2-Components](https://github.com/KishoreIthadi/Angular2-Components)
</pre></big>

### Components

| Components       |
|------------------|
| pagination       |  
| rating           |  
| messages         |


### Getting started

#### Step 1: Install Angular2-Comps Package

```bash
npm install --save Angular2-Comps
```

#### Step 2: Configuring SystemJS

If your project is using SystemJS for module loading, you will need to add `angular2-comps` 
to the SystemJS configuration:

```js
System.config({
  // existing configuration options
  map: {
    ...
    'angular2-comps': 'npm:angular2-comps/index.js',
    ...
  },
  defaultJSExtensions: true
});
```

#### Step 3: Import the Module
  
Add components as an declarations in your app's root NgModule.  
  
```ts
import { Angular2CompsModule } from 'angular2-comps'
 
@NgModule({
  ...
  imports: [Angular2CompsModule],
  ...
})
export class AppModule { }
```

#### Step 4: Include BootStrap & Font Awesome

Include bootstrap & font Awesome links for giving default styles. Later you can override the default styles based on your requirement.

```style
<link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet">

<link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet">
```