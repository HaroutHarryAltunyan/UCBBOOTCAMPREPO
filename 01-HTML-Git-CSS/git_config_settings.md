# Setup your `git config`

`git` is very configurable. The basics are setting your name and email. This will give you credit for your `git` commits.

(Replace Mona Lisa's info with yours)

```sh
git config --global user.name "Mona Lisa"
git config --global user.email "monalisa@gmail.com"
git config --global core.editor "code --wait"
git config --global core.pager cat
git config --global pull.rebase true
git config --global fetch.prune true
git config --global init.defaultBranch "main"
```
