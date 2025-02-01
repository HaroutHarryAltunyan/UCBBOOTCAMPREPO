# .gitignore file

There are some files we create within our local git repositories that should never get committed and pushed to Github. Git provides a way to ignore them when it comes to adding, committing and pushing files to the remote github server.

1. Create a new repo on Github called `git-exploration`. Make sure that you include a README. Don't ask github to create a `.gitignore` file.
1. Clone this repository to your local machine
1. If there is no README.md, create one now and add `git-exploration` as the title
1. Add the words `1. Adding Gitignore` to the README
1. Create a new file called `.gitignore`
1. Add the following lines to the `.gitignore` file:

```
.DS_Store
node_modules
.env
```

7. Type `git commit -am "Adds gitignore" && git push`

Adding a `.gitignore` file to the root directory of our git project makes sure these files and folders will not added and committed to our git project. You can add any file or folder you want to ignore on it's own line. These files are needed for our class:

- `.DS_Store` is a file created by the Mac Finder to aid in rendering the finder windows. It changes a lot and can create a lot of nightmares when every mac user in the project is creating these.
- `node_modules` is a folder that holds dependencies we gather from the internet with a package manager (e.g., `npm`) to augment our projects. This is other people's code that we will never edit. When we deploy our node applications we just re-gather them at the server or at build time. This folder typically holds a lot of files and will gum up our `git` projects. We will start needing this in Week 9 but best to get used to it now.
- `.env` is a file that holds environment variables our application will typically use to hold secrets like passwords and api keys. If you accidentally commit and push your `.env` make sure you change any passwords or disable any keys in there as those are now public!
