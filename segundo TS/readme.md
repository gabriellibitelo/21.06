# verificar a versão do node instalado 
node -v

# cd e nome da pasta para entrar na pasta

# Gerar arquivo package.json
npm init -y

# instalar o typescript
npm i -g typescript

# transpilar o código ts
npx tsc index.ts
node index.js 

# criar arquivo de configuracao do TS
npx tsc -init

# configuraçoes no arquivo ts config.json
target"es6"
"modle":"comandjs";
"sourcMap: true"
"outdir; /src"
"removeomments " : "true"
"nolepLicituany" : "true"

# adcionar script no package.json
"start": "npx tsc && node .//buIld/index.js