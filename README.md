# Sky-Alert Exercise solution :3

This solves all three exercises proposed by PDF sent by email, package has been created using `tsdx` as recommended with default configurations as well.

Each exercise with tests is contained into its own file (check src and test), and they were created using a standard github Project pipeline (Issue -> Task -> PR -> Solution), `tsdx` also setups automatic CI/CD so it was also used here.

I have also included a `FEEDBACK.md` file containing my personal thoughts on this project.

# Usage

To build, test and deploy just use the standard [tsdx](https://tsdx.io/) guide.

Test:
```sh
~$ npm run test
```

Build:
```sh
~$ npm run build
```

And so on...

## Methodology

I used TDD in most cases (just documentation and cleanup was not done in this fashion), and documented everything at the end (if I had enough time). However I did not use any git methodology aside from trunk based development (branch main and merge when needed) because I think it was not needed.
