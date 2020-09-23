- Package.json no contiene scripts inter-operables entre el equipo. Los scripts deberían ser simplificados mediante este documento.
- Se debería forzar el uso de npm o yarn. En este caso, se sugiere npm por el package-lock, no obstante, esto podría causar error de dependencias (warning).
- No se ha detectado integración continua. Esto debería ser añadido.
- No se ha detectado Docker. Se recomienda el uso de un nginx ebedido en Docker, con pre-compilación angular (HotSwap + Angular SSR)
- Angular no usa AOT. Se recomienda su uso.
- El enrutador de la página principal utilizaba un href, en lugar del router de angular. Se ha eliminado el target blank del mismo modo.
- Se debería claficar el menú dentro de app.component.html como un componente llamado menú.
- Se deberían añadir comentarios aclaratorios sobre cada apartado con <!-- BEGIN BODY --> <!-- END BODY -->, por ejemplo, si el nombre del componente es difuso.
- Fruit-add.component permite añadir precios fuera de enteros. Error. Se debe comprobar.

