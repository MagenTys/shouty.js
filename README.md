# Shouty

Shouty is a social networking application for short physical distances.
When someone shouts, only people within 1000m can hear it.

Shouty doesn't exist yet - you will implement it yourself!

That is, if you're attending a BDD/Cucumber course.

## Agenda

### Get the code

Git:

    git clone https://github.com/MagenTys/shouty.js.git
    cd shouty.js
    git checkout YYYY-MM-DD

Subversion:

    svn checkout https://github.com/MagenTys/shouty.js/branches/YYYY-MM-DD shouty.js
    cd shouty.js

Or simply [download](https://github.com/MagenTys/shouty.js/releases) a zip or tarball.

### Set up environment

You can run the `./runDocker.sh` command to get docker up and running which has Node.js, Cucumber and NPM installed...

Or if that fails....

#### Install Node.js

#### Install Cucumber and other dependencies

```
npm install
```

After this, Cucumber is in `./node_modules/.bin/cucumber.js`
If that feels awkward to you, install it globally:

```
npm install --global cucumber
```

After this, `cucumber.js` is on your `PATH`.

#### Run Cucumber
* Run `npm test`

You should see:

    0 scenarios
    0 steps

### Brainstorm capabilities

* Who are the main stakeholders?
* What can people do with the app?
* What are the main differentiators from other apps?

### Pick one capability

* Define rules
* Create high level examples (Friends episodes)

Then do this for each example to discover more examples:

* Can you think of a context where the outcome would be different?
* Are there any other outcomes we haven't thought about?

### Implement one capability.

* Write a Cucumber Scenario for one of the examples
* Make it pass!
