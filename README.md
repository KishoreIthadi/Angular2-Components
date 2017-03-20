# Angular2-Components

This project consists of angular2 components like pagination, rating etc.

### Examples

```link
[https://kishoreithadi.github.io/Angular2-Components/](https://kishoreithadi.github.io/Angular2-Components/)
```

### Installation

The latest release of Angular2-Comps can be installed from npm

```bash
npm install --save Angular2-Comps
```

### Components

| Components       |
|------------------|
| pagination       |  
| rating           |



### Getting started

#### Step 1: Install Angular2-Comps Package

```bash
npm install --save angular2-comps
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
  }
});
```

#### Step 3: Import the Module
  
Add components as an declarations in your app's root NgModule.  
  
```ts
import { PaginationComponent, RatingComponent } from 'angular2-comps'
 
@NgModule({
  ...
  declarations: [PaginationComponent, RatingComponent],
  ...
})
export class AppModule { }
```