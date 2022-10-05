# Integração do Node com o AMQP 1.0

Aplicação desenvolvida para realizar testes de integração do NodeJS com o AMQP na versão 1.0.

## Configurado o Docker

O AMQP será executado no docker e para realizar a execução siga os seguintes passos:

1. Para gerar o build do docker, execute um dos comandos abaixo:

   ```bash
   docker build -t amqp-1.0 .
   ```

   ```bash
   yarn docker:build
   ```

2. Para executar o docker, execute um dos comandos abaixo:

   ```bash
   docker run -p 5672:5672 -p 15672:15672 amqp-1.0
   ```

   ```bash
   yarn docker:run
   ```

3. Acesse o [site local do AMQP](http://localhost:15672/#/queues) para criar a fila. Caso seja necessário por o usuário e a senha, você poderá encontrar essas informações no Dockerfile do projeto.

4. Na página de **Queues** na área **Add a new queue** adicione a fila com o nome **fila.teste** no campo `name` e no campo `Durability` altere para `Transient` e clique no botão `Add queue`.

5. Clique na fila **fila.teste** que surgir acima da área **Add a new queue**.

6. No campo `Payload` do **Publish message** adicione algum texto para ser consumido pela aplicação e clique no botão `Publish message`.
   > Obs.: O processo de publicação poderá se repetido inúmeras vezes.

## Executado a aplicação

1. Para executar a aplicação será necessário a versão >= v14.19 do NodeJS e ter o Yarn >= 1.22.19 configurado.
2. Instale as dependências com o comando:
   ```bash
   yarn install
   ```
3. Para executar a aplicação execute o comando:
   ```bash
   yarn start
   ```
