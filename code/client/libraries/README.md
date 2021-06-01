# Libraries Structure

## Genereal Structure

Every library generally has up to three files

* public - this is the library's public interface, which is mean for use in React components/pages
* private - this is the library's private interface and implementation details of the public interface. These files are NOT meant to be used outside of given library.
* interfaces - Typescript interfaces

## IO-operations

All IO operations (requests for example) are found under the IO folder. They follow the same structure as above.

## Testing

Because jest is being used for unit tests use the commonJS syntax for imports (eg. 'require("./path/to/module")')