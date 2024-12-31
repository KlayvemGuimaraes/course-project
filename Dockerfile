# A linha abaixo especifica a imagem base para o contêiner Docker. Neste caso, está usando a imagem oficial do PostgreSQL. 
# Além de subir um banco de dados postgres funcionando, a imagem também cria um usuário chamado postgres.
FROM postgres

RUN usermod -u 1000 postgres