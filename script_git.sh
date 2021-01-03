echo "esciba el  nombre del repositorio: "
read repositorio

echo "# $repositorio" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main


git remote add origin https://github.com/dramiivbg/$repositorio.git
git push -u origin master
