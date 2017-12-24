# Viewpoint size directive.
Set view breakpoints

```
export class Config {

    public breakpoints: IConfig = {
        medium: 600,
        large: 900
    }
}
```
Define directive attribute value.
```
<test-component *ifViewportSize="'small'" [value]="1"></test-component>
```
Show content if it has appropriate viewpoint value.

## Development server

- Run **`npm install`**.

- Start server with **`ng serve`** command. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.
