# Как взяться за задачу и довести её до конца

1. Сделай fork
2. Создай в своём fork **отдельную ветку** под свою задачу. За основу используй master (если твои изменения не зависят от тех, которые сейчас в dev).
```
git pull
git checkout -b my-task master
```
3. Внеси изменения в своей ветке. Не забудь обновить `Changelog.md`.
4. Сделай pull request из своей ветки в dev ветку основного репозитория. 