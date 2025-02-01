# Create a new branch

1. In your local copy of the `git-exploration` project. In the `README.md` add `1. Adding in the main branch` underneath the line about the gitignore file
1. Type `git commit -am "Updates the README in the main branch" && git push` and hit enter. Now our local and remote repos are in sync.
1. Type `git checkout -b feature-homepage` and hit enter. You should now be in a new branch called `feature-homepage`.
1. Type `git branch` and hit enter which should show you a list of branches on your local
1. Edit the README again adding `1. Adding in the feature-homepage branch` underneath the line about the main branch
1. Type `git commit -am "Updates the README in the feature-homepage branch"` and hit enter (Don't push yet!).
1. Type `git branch -r` and hit enter. This shows you the branches on your remote git project. You should see `origin/main -> origin/HEAD` and `origin/main`
1. Now type `git push` and hit enter to push the feature-homepage branch to github.
1. You should see an error:

```
fatal: The current branch feature-homepage has no upstream branch.
To push the current branch and set the remote as upstream, use

    git push --set-upstream origin feature-homepage

To have this happen automatically for branches without a tracking
upstream, see 'push.autoSetupRemote' in 'git help config'.
```

1. Type `git push --set-upstream origin feature-homepage`
1. Type `git branch -r` and hit enter. This shows you the branches on your remote git project. You should see `origin/main -> origin/HEAD` and `origin/main` and `origin/my-feature`
