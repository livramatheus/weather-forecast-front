

<h1 align="center">⛅ React Weather Forecast (front-end)</h1>

- [English documentation](#english-documentation)
- [Documentação em português](#documentação-em-português)

____
# English Documentation
<h2>📜 Table of content</h2>

<!--ts-->
- [About the project](#about-the-project)
- [Features](#features)
- [Front-end](#front-end)
	- [Layout](#layout)
	- [Technologies](#technologies-front)
- [Back-end](#back-end)
	- [External APIs](#external-apis)
	- [Technologies](#technologies-back)
- [How to set up](#how-to-set-up)
- [Inspirations](#inspirations)
- [Live demo](#live-demo)
- [Author](#author)
<!--te-->
 
>**🤚 This repository is the client-side of Weather Forecast, if you are interested on the server-side, check [this repository](https://github.com/livramatheus/weather-forecast-back)!**
<h2 id="about-the-project">💻 About the project</h2>

This is a **weather forecast** application, that delivers a simple, clean and minimalist layout, projected for desktop and phone screens. This app was built using *React* and *Node*.

The main goal with this project was to **release a simple yet complete** weather forecast app that delivery essential information without transmitting an empty feeling.

<h2 id="features">🔎 Features</h2>

This application obtains user's current location and returns back to the client his city and district name, current weather conditions, detailed weather forecast for the current date and minimal and maximum temperature for the next days.

<h2 id="front-end">Front-end</h2>

The client-side of **Weather Forecast** was built with React, resulting in the following layout:

<h3 id="layout">📐 Layout</h3>

#### Mobile
<div style="display: flex">
	<img alt="Mobile 1" title="#1_m" src="https://github.com/livramatheus/weather-forecast-front/raw/main/src/assets/1_m.png" height="280"/>
	<img alt="Mobile 2" title="#2_m" src="https://github.com/livramatheus/weather-forecast-front/raw/main/src/assets/2_m.png" height="280"/>
</div>

#### Desktop
<div style="display: flex">
	<img alt="Desktop 1" title="#1_d" src="https://github.com/livramatheus/weather-forecast-front/raw/main/src/assets/1_d.png" height="280"/>
	<img alt="Desktop 2" title="#2_d" src="https://github.com/livramatheus/weather-forecast-front/raw/main/src/assets/1_d.png" height="280"/>
</div>

<h3 id="technologies-front">🔨 Technologies</h3>

The following techlogies were used to build Weather Forecast's front-end:
- [Axios](https://github.com/axios/axios)
- [Material UI](https://mui.com/)
- [React Loading Skeleton](https://www.npmjs.com/package/react-loading-skeleton)
- [React Router Dom](https://www.npmjs.com/package/react-router-dom)

<h2 id="back-end">Back-end</h2>

The back-end consists in a server developed with Express Framework for Node, which listens to request triggered by the the front-end layer of the application.

This Node server has a sole endpoint that returns a set of weather data and user's specific location:

* **/forecast**: expects two parameters as *query string*:
	- **lat:** user´s latitude
	- **long:** user´s longitude

* Returns:
	- User's current city and district through reverese geolocation
	- Current weather conditions, like temperature, wind speed and humidity
	- Detailed weather forecast for the current date
	- Minimal and maximum temperature for the next days

Example:
> /forecast?lat=-23.5549053&long=-46.4673641

<h3 id="external-apis">💱 External APIs</h3>
	
The following third party APIs were used to create Weather Forecast's API responses:
- [Open Weather Map](https://openweathermap.org/) for weather data
- [LocationIQ](https://locationiq.com/) for reverse geolocation
 
<h3 id="technologies-back">🔨 Technologies</h3>

The following techlogies were used to build Weather Forecast server:
- [Cors](https://www.npmjs.com/package/cors)
- [Express](https://www.npmjs.com/package/express)
- [Axios](https://github.com/axios/axios)

<h3 id="how-to-set-up">❓ How to set up</h3>

If you wish to fork this project you'll need to set up the following environment variables:

#### Client-side:
- **REACT_APP_BACK_URL** (Server URL in order to send requests)

#### Server-side:
- **API_GEO** (LocationIQ API key)
- **API_WEATHER** (Open Weather Map API key)
- **PORT** (Desired port to run express)

<h3 id="inspirations">😁 Inspirations</h3>

Weather Forecast was inspired by the following projects on Figma:
- [Weather Icons | Flat & Outline](https://www.figma.com/community/file/955978734883254712)
- [Weather Forecast App](https://www.figma.com/file/fXpD0piPYygazRk9mAXQH9/Weather-Forecast-App-(Community))

<h3 id="live-demo">🌐 Live demo</h3>

Check out this project running on [Netlify + Heroku](https://livramento-weather.netlify.app/)

You can also edit and view this project on Code Sand Box:

#### Front-end:
[![Edit Weather Forecast (Front)](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/weather-forecast-front-465th?fontsize=14&hidenavigation=1&theme=dark)

#### Back-end:
[![Edit Weather Forecast (Back)](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/weather-forecast-back-z8nuo?fontsize=14&hidenavigation=1&theme=dark)

<h3 id="author">👩‍🦲 Author</h3>

Full stack developed by **Matheus do Livramento**.

[GitHub](https://github.com/livramatheus) | [LinkedIn](https://www.linkedin.com/in/matheus-livramento-623590209/)

____
# Documentação em português
<h2>📜 Tabela de conteúdo</h2>

<!--ts-->
- [Sobre o projeto](#about-the-project-br)
- [Funcionalidades](#features-br)
- [Front-end](#front-end-br)
	- [Layout](#layout-br)
	- [Tecnologias](#technologies-front-br)
- [Back-end](#back-end-br)
	- [APIs externas](#external-apis-br)
	- [Tecnologias](#technologies-back-br)
- [Como configurar](#how-to-set-up-br)
- [Inspirações](#inspirations-br)
- [Live demo](#live-demo-br)
- [Autor](#autor-br)
<!--te-->
 
>**🤚 🤚 Este repositório é do lado do cliente da Previsão do Tempo, se você estiver interessado no lado do servidor, verifique [este repositório](https://github.com/livramatheus/weather-forecast-back)!**

<h2 id="about-the-project-br">💻 Sobre o projeto</h2>

Trata-se de um aplicativo de **previsão do tempo**, que oferece um layout simples, clean e minimalista, projetado para telas de desktops e dispositivos móveis. Este aplicativo foi desenvolvido usando *React* e *Node*.

O principal objetivo com este projeto era **lançar um aplicativo de previsão do tempo simples, mas completo**, que entregasse informações essenciais sem transmitir uma sensação de vazio.

<h2 id="features-br">🔎 Funcionalidades</h2>

Este aplicativo obtém a localização atual do usuário e retorna ao cliente o nome de sua cidade e bairro, condições climáticas atuais, previsão do tempo detalhada para a data atual e temperatura mínima e máxima para os próximos dias.

<h2 id="front-end-br">Front-end</h2>

O lado do cliente de **Weather Forecast** foi construído com React, resultando no seguinte layout:

<h3 id="layout-br">📐 Layout</h3>

#### Mobile
<div style="display: flex">
	<img alt="Mobile 1" title="#1_m" src="https://github.com/livramatheus/weather-forecast-front/raw/main/src/assets/1_m.png" height="280"/>
	<img alt="Mobile 2" title="#2_m" src="https://github.com/livramatheus/weather-forecast-front/raw/main/src/assets/2_m.png" height="280"/>
</div>

#### Desktop
<div style="display: flex">
	<img alt="Desktop 1" title="#1_d" src="https://github.com/livramatheus/weather-forecast-front/raw/main/src/assets/1_d.png" height="280"/>
	<img alt="Desktop 2" title="#2_d" src="https://github.com/livramatheus/weather-forecast-front/raw/main/src/assets/1_d.png" height="280"/>
</div>

<h3 id="technologies-front-br">🔨 Tecnologias</h3>

As seguintes tecnologias foram utilizadas para construir o front-end de Weather Forecast:
- [Axios](https://github.com/axios/axios)
- [Material UI](https://mui.com/)
- [React Loading Skeleton](https://www.npmjs.com/package/react-loading-skeleton)
- [React Router Dom](https://www.npmjs.com/package/react-router-dom)

<h2 id="back-end-br">Back-end</h2>

O back-end consiste em um servidor desenvolvido com Express Framework para Node, que escuta as solicitações acionadas pela camada front-end da aplicação.

Este servidor Node tem um único endpoint que retorna um conjunto de dados meteorológicos e a localização específica do usuário:

- /forecast: espera dois parâmetros por *query string*:
	- **lat:** latitude do usuário
	- **long:** longitude do usuário

- Retorna:
	- Cidade e bairro atuais do usuário por meio de *reverese geolocation*
	- Condições climáticas atuais, como temperatura, velocidade do vento e umidade
	- Previsão meteorológica detalhada para a data atual
	- Temperatura mínima e máxima para os próximos dias

Exmplo:
> /forecast?lat=-23.5549053&long=-46.4673641

<h3 id="external-apis-br">💱 APIs externas</h3>

As seguintes APIs de terceiros foram usadas para criar respostas da API de **Weather Forecast**:
- [Open Weather Map](https://openweathermap.org/) para dados climáticos
- [LocationIQ](https://locationiq.com/) para o *reverse geolocation*
 
<h3 id="technologies-back-br">🔨 Tecnologias</h3>

As seguintes tecnologias foram utilizadas para desenvolver o sevidor de **Weather Forecast**:
- [Cors](https://www.npmjs.com/package/cors)
- [Express](https://www.npmjs.com/package/express)
- [Axios](https://github.com/axios/axios)

<h3 id="how-to-set-up-br">❓ Como configurar</h3>

Se você deseja fazer um *fork* deste projeto, você precisará configurar as seguintes variáveis de ambiente:

#### Client-side:
- **REACT_APP_BACK_URL** (URL do back-end para disparar requisições)

#### Server-side:
- **API_GEO** (Chave de API de LocationIQ)
- **API_WEATHER** (Chave de API de Open Weather Map)
- **PORT** (Porta desejada pra rodar o servidor)

<h3 id="inspirations-br">😁 Inspirações</h3>

Weather Forecast foi inspirado pelos seguintes projetos do Figma:
- [Weather Icons | Flat & Outline](https://www.figma.com/community/file/955978734883254712)
- [Weather Forecast App](https://www.figma.com/file/fXpD0piPYygazRk9mAXQH9/Weather-Forecast-App-(Community))

<h3 id="live-demo-br">🌐 Live demo</h3>

Veja este projeto rodando no [Netlify + Heroku](https://livramento-weather.netlify.app/)

Você também pode visualizar e editar este código no Code Sand Box:

#### Front-end:
[![Edit Weather Forecast (Front)](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/weather-forecast-front-465th?fontsize=14&hidenavigation=1&theme=dark)

#### Back-end:
[![Edit Weather Forecast (Back)](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/weather-forecast-back-z8nuo?fontsize=14&hidenavigation=1&theme=dark)

<h3 id="autor-br">👩‍🦲 Author</h3>

Full stack  desenvolvido por **Matheus do Livramento**.

[GitHub](https://github.com/livramatheus) | [LinkedIn](https://www.linkedin.com/in/matheus-livramento-623590209/)
