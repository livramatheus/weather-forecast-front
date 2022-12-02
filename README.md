<h1 align="center">⛅ React Weather Forecast (front-end)</h1>

<ul>
	<li><a href="#english-documentation">English documentation</a></li>
	<li><a href="#documentação-em-português">Documentação em português</a></li>
</ul>

<hr>

<h1 id="english-documentation">English Documentation</h1>

<h2>📜 Table of content</h2>

<!--ts-->
<ul>
	<li><a href="#about-the-project">About the project</a></li>
	<li><a href="#live-demo">Live demo</a></li>
	<li><a href="#features">Features</a></li>
	<li><a href="#front-end">Front-end</a></li>
	<ul>
		<li><a href="#layout">Layout</a></li>
		<li><a href="#technologies-front">Technologies</a></li>
	</ul>
	<li><a href="#back-end">Back-end</a></li>
	<ul>
		<li><a href="#external-apis">External APIs</a></li>
		<li><a href="#technologies-back">Technologies</a></li>
	</ul>
	<li><a href="#how-to-set-up">How to set up</a></li>
	<li><a href="#inspirations">Inspirations</a></li>
	<li><a href="#author">Author</a></li>
</ul>
<!--te-->

<blockquote>
	<p><strong>🤚 This repository is the client-side of Weather Forecast, if you are interested on server-side, check <a href="https://github.com/livramatheus/weather-forecast-back">this repository</a>!</strong></p>
</blockquote>

<h2 id="about-the-project">💻 About the project</h2>

<p>This is a <strong>weather forecast</strong> application, that delivers a simple, clean and minimalist layout, projected for desktop and phone screens. This app was built using <em>React</em> and <em>Node</em>.</p>
<p>The main goal with this project was to <strong>release a simple and complete</strong> weather forecast app.</p>

<h2 id="live-demo">🌐 Live demo</h2>

<p>Check out this project running on <a href="https://livramento-weather.netlify.app/">Netlify + Cyclic</a></p>
<p>You can also edit and view this project on Code Sand Box:</p>

<h4 id="front-end-">Front-end:</h4>

<p><a href="https://codesandbox.io/s/weather-forecast-front-465th?fontsize=14&amp;hidenavigation=1&amp;theme=dark"><img src="https://codesandbox.io/static/img/play-codesandbox.svg" alt="Edit Weather Forecast (Front)"></a></p>

<h4 id="back-end-">Back-end:</h4>

<p><a href="https://codesandbox.io/s/weather-forecast-back-z8nuo?fontsize=14&amp;hidenavigation=1&amp;theme=dark"><img src="https://codesandbox.io/static/img/play-codesandbox.svg" alt="Edit Weather Forecast (Back)"></a></p>

<h2 id="features">🔎 Features</h2>

<p>This application obtains user's current location and returns back to the client his city and district name, current weather conditions, detailed weather forecast for the current date and minimal and maximum temperature for the next few days.</p>

<h2 id="front-end">Front-end</h2>

<p>The client-side of <strong>Weather Forecast</strong> was built with React, resulting in the following layout:</p>

<h3 id="layout">📐 Layout</h3>

<h4 id="mobile">Mobile</h4>

<div style="display: flex">
    <img alt="Mobile 1" title="#1_m" src="https://github.com/livramatheus/weather-forecast-front/raw/main/src/assets/1_m.png" height="280"/>
    <img alt="Mobile 2" title="#2_m" src="https://github.com/livramatheus/weather-forecast-front/raw/main/src/assets/2_m.png" height="280"/>
</div>

<h4 id="desktop">Desktop</h4>

<div style="display: flex">
    <img alt="Desktop 1" title="#1_d" src="https://github.com/livramatheus/weather-forecast-front/raw/main/src/assets/1_d.png" height="280"/>
    <img alt="Desktop 2" title="#2_d" src="https://github.com/livramatheus/weather-forecast-front/raw/main/src/assets/2_d.png" height="280"/>
</div>

<h3 id="technologies-front">🔨 Technologies</h3>

<p>The following technologies were used to build Weather Forecast&#39;s front-end:</p>

<ul>
	<li><a href="https://github.com/axios/axios">Axios</a></li>
	<li><a href="https://mui.com/">Material UI</a></li>
	<li><a href="https://www.npmjs.com/package/react-loading-skeleton">React Loading Skeleton</a></li>
	<li><a href="https://www.npmjs.com/package/react-router-dom">React Router Dom</a></li>
</ul>

<h2 id="back-end">Back-end</h2>

<p>The back-end consists in a server developed with Express Framework for Node, which listens to requests triggered by the front-end layer of the application.</p>
<p>This Node server has a sole endpoint that returns a set of weather data and user's specific location:</p>

<ul>
	<li><strong>/forecast</strong>: expects two parameters as a <em>query string</em>:</li>
	<ul>
		<li><strong>lat:</strong> user´s latitude</li>
		<li><strong>long:</strong> user´s longitude</li>
	</ul>
	<li>Returns:</li>
	<ul>
		<li>User's current city and district through reverese geolocation</li>
		<li>Current weather conditions, like temperature, wind speed and humidity</li>
		<li>Detailed weather forecast for the current date</li>
		<li>Minimal and maximum temperature for the next days</li>
	</ul>
</ul>

<p>Example:</p>
<blockquote>
	<p>/forecast?lat=-23.5549053&long=-46.4673641</p>
</blockquote>

<h3 id="external-apis">💱 External APIs</h3>

<p>The following third-party APIs were used to create Weather Forecast&#39;s API responses:</p>

<ul>
	<li><a href="https://openweathermap.org/">Open Weather Map</a> for weather data</li>
	<li><a href="https://locationiq.com/">LocationIQ</a> for reverse geolocation</li>
</ul>

<h3 id="technologies-back">🔨 Technologies</h3>

<p>The following technologies were used to build Weather Forecast server:</p>

<ul>
	<li><a href="https://www.npmjs.com/package/cors">Cors</a></li>
	<li><a href="https://www.npmjs.com/package/express">Express</a></li>
	<li><a href="https://github.com/axios/axios">Axios</a></li>
</ul>

<h3 id="how-to-set-up">❓ How to set up</h3>

<p>If you wish to fork this project, you&#39;ll need to set up the following environment variables:</p>

<h4 id="client-side-">Client-side:</h4>

<ul>
	<li><strong>REACT_APP_BACK_URL</strong> (Server URL in order to send requests)</li>
</ul>

<h4 id="server-side-">Server-side:</h4>

<ul>
	<li><strong>API_GEO</strong> (LocationIQ API key)</li>
	<li><strong>API_WEATHER</strong> (Open Weather Map API key)</li>
	<li><strong>PORT</strong> (Desired port to run express)</li>
</ul>

<h3 id="inspirations">😁 Inspirations</h3>

<p>Weather Forecast was inspired by the following projects on Figma:</p>
<ul>
	<li><a href="https://www.figma.com/community/file/955978734883254712">Weather Icons | Flat &amp; Outline</a></li>
	<li><a href="https://www.figma.com/file/fXpD0piPYygazRk9mAXQH9/Weather-Forecast-App-(Community)">Weather Forecast App</a></li>
</ul>

<h3 id="author">👩‍🦲 Author</h3>

<p>Full stack developed by <strong>Matheus do Livramento</strong>.</p>
<p><a href="https://github.com/livramatheus">GitHub</a> | <a href="https://www.linkedin.com/in/livramatheus">LinkedIn</a> | <a href="https://www.livramento.dev/">Website</a></p>
<hr>

<h1 id="documentação-em-português">Documentação em português</h1>

<h2>📜 Tabela de conteúdo</h2>

<!--ts-->
<ul>
	<li><a href="#about-the-project-br">Sobre o projeto</a></li>
	<li><a href="#live-demo-br">Live demo</a></li>
	<li><a href="#features-br">Funcionalidades</a></li>
	<li><a href="#front-end-br">Front-end</a></li>
	<ul>
		<li><a href="#layout-br">Layout</a></li>
		<li><a href="#technologies-front-br">Tecnologias</a></li>
	</ul>
	<li><a href="#back-end-br">Back-end</a></li>
	<ul>
		<li><a href="#external-apis-br">APIs externas</a></li>
		<li><a href="#technologies-back-br">Tecnologias</a></li>
	</ul>
	<li><a href="#how-to-set-up-br">Como configurar</a></li>
	<li><a href="#inspirations-br">Inspirações</a></li>
	<li><a href="#autor-br">Autor</a></li>
</ul>
<!--te-->

<blockquote>
<p><strong>🤚 🤚 Este repositório é do lado do cliente da Previsão do Tempo, se você estiver interessado no lado do servidor, verifique <a href="https://github.com/livramatheus/weather-forecast-back">este repositório</a>!</strong></p>
</blockquote>

<h2 id="about-the-project-br">💻 Sobre o projeto</h2>

<p>Trata-se de um aplicativo de <strong>previsão do tempo</strong>, que oferece um layout simples, clean e minimalista, projetado para telas de desktops e dispositivos móveis. Este aplicativo foi desenvolvido usando <em>React</em> e <em>Node</em>.</p>
<p>O principal objetivo com este projeto era <strong>lançar um aplicativo de previsão do tempo simples e completo</strong>.</p>

<h2 id="live-demo-br">🌐 Live demo</h2>

<p>Veja este projeto rodando no <a href="https://livramento-weather.netlify.app/">Netlify + Cyclic</a></p>
<p>Você também pode visualizar e editar este código no Code Sand Box:</p>

<h4 id="front-end-">Front-end:</h4>

<p><a href="https://codesandbox.io/s/weather-forecast-front-465th?fontsize=14&amp;hidenavigation=1&amp;theme=dark"><img src="https://codesandbox.io/static/img/play-codesandbox.svg" alt="Edit Weather Forecast (Front)"></a></p>

<h4 id="back-end-">Back-end:</h4>

<p><a href="https://codesandbox.io/s/weather-forecast-back-z8nuo?fontsize=14&amp;hidenavigation=1&amp;theme=dark"><img src="https://codesandbox.io/static/img/play-codesandbox.svg" alt="Edit Weather Forecast (Back)"></a></p>

<h2 id="features-br">🔎 Funcionalidades</h2>

<p>Este aplicativo obtém a localização atual do usuário e retorna ao cliente o nome de sua cidade e bairro, condições climáticas atuais, previsão do tempo detalhada para a data atual e temperatura mínima e máxima para os próximos dias.</p>
<h2 id="front-end-br">Front-end</h2>

<p>O lado do cliente de <strong>Weather Forecast</strong> foi construído com React, resultando no seguinte layout:</p>

<h3 id="layout-br">📐 Layout</h3>

<h4 id="mobile">Mobile</h4>

<div style="display: flex">
    <img alt="Mobile 1" title="#1_m" src="https://github.com/livramatheus/weather-forecast-front/raw/main/src/assets/1_m.png" height="280"/>
    <img alt="Mobile 2" title="#2_m" src="https://github.com/livramatheus/weather-forecast-front/raw/main/src/assets/2_m.png" height="280"/>
</div>

<h4 id="desktop">Desktop</h4>

<div style="display: flex">
    <img alt="Desktop 1" title="#1_d" src="https://github.com/livramatheus/weather-forecast-front/raw/main/src/assets/1_d.png" height="280"/>
    <img alt="Desktop 2" title="#2_d" src="https://github.com/livramatheus/weather-forecast-front/raw/main/src/assets/2_d.png" height="280"/>
</div>

<h3 id="technologies-front-br">🔨 Tecnologias</h3>

<p>As seguintes tecnologias foram utilizadas para construir o front-end de Weather Forecast:</p>

<ul>
	<li><a href="https://github.com/axios/axios">Axios</a></li>
	<li><a href="https://mui.com/">Material UI</a></li>
	<li><a href="https://www.npmjs.com/package/react-loading-skeleton">React Loading Skeleton</a></li>
	<li><a href="https://www.npmjs.com/package/react-router-dom">React Router Dom</a></li>
</ul>

<h2 id="back-end-br">Back-end</h2>

<p>O back-end consiste em um servidor desenvolvido com Express Framework para Node, que escuta as solicitações acionadas pela camada front-end da aplicação.</p>
<p>Este servidor Node tem um único endpoint que retorna um conjunto de dados meteorológicos e a localização específica do usuário:</p>

<ul>
	<li>/forecast: espera dois parâmetros por <em>query string</em>:</li>
	<ul>
		<li><strong>lat:</strong> latitude do usuário</li>
		<li><strong>long:</strong> longitude do usuário</li>
	</ul>
	<li>Retorna:</li>
	<ul>
		<li>Cidade e bairro atuais do usuário por meio de <em>reverese geolocation</em></li>
		<li>Condições climáticas atuais, como temperatura, velocidade do vento e umidade</li>
		<li>Previsão meteorológica detalhada para a data atual</li>
		<li>Temperatura mínima e máxima para os próximos dias</li>
	</ul>
</ul>

<p>Exemplo:</p>

<blockquote>
<p>/forecast?lat=-23.5549053&amp;long=-46.4673641</p>
</blockquote>

<h3 id="external-apis-br">💱 APIs externas</h3>

<p>As seguintes APIs de terceiros foram usadas para criar respostas da API de <strong>Weather Forecast</strong>:</p>

<ul>
	<li><a href="https://openweathermap.org/">Open Weather Map</a> para dados climáticos</li>
	<li><a href="https://locationiq.com/">LocationIQ</a> para o <em>reverse geolocation</em></li>
</ul>

<h3 id="technologies-back-br">🔨 Tecnologias</h3>

<p>As seguintes tecnologias foram utilizadas para desenvolver o sevidor de <strong>Weather Forecast</strong>:</p>

<ul>
	<li><a href="https://www.npmjs.com/package/cors">Cors</a></li>
	<li><a href="https://www.npmjs.com/package/express">Express</a></li>
	<li><a href="https://github.com/axios/axios">Axios</a></li>
</ul>

<h3 id="how-to-set-up-br">❓ Como configurar</h3>

<p>Se você deseja fazer um <em>fork</em> deste projeto, você precisará configurar as seguintes variáveis de ambiente:</p>

<h4 id="client-side-">Client-side:</h4>

<ul>
	<li><strong>REACT_APP_BACK_URL</strong> (URL do back-end para disparar requisições)</li>
</ul>

<h4 id="server-side-">Server-side:</h4>

<ul>
	<li><strong>API_GEO</strong> (Chave de API de LocationIQ)</li>
	<li><strong>API_WEATHER</strong> (Chave de API de Open Weather Map)</li>
	<li><strong>PORT</strong> (Porta desejada pra rodar o servidor)</li>
</ul>

<h3 id="inspirations-br">😁 Inspirações</h3>

<p>Weather Forecast foi inspirado pelos seguintes projetos do Figma:</p>
<ul>
	<li><a href="https://www.figma.com/community/file/955978734883254712">Weather Icons | Flat &amp; Outline</a></li>
	<li><a href="https://www.figma.com/file/fXpD0piPYygazRk9mAXQH9/Weather-Forecast-App-(Community)">Weather Forecast App</a></li>
</ul>

<h3 id="autor-br">👩‍🦲 Author</h3>

<p>Full stack  desenvolvido por <strong>Matheus do Livramento</strong>.</p>
<p><a href="https://github.com/livramatheus">GitHub</a> | <a href="https://www.linkedin.com/in/livramatheus">LinkedIn</a> | <a href="https://www.livramento.dev/">Website</a></p>
