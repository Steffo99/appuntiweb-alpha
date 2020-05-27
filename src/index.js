let Sentry = null;
if(process.env.NODE_ENV === "development") {
	console.debug("Initializing Preact Debugger...")
	require("preact/debug");
}
else if(process.env.NODE_ENV === "production") {
	console.debug("Initializing Sentry...")
	Sentry = require("@sentry/browser");
	Sentry.init({dsn: "https://9f5089346fd14e04a6f412638474dfec@o40131.ingest.sentry.io/5255500"});
}
else {
	console.debug("Not initializing anything, unknown env.");
}

// noinspection ES6UnusedImports
import _style from './index.less';
// noinspection ES6UnusedImports
import _manifest from './meta/manifest.json';
// noinspection ES6UnusedImports
import _cname from './meta/CNAME';
// noinspection ES6UnusedImports
import _nojekyll from './meta/.nojekyll';

import Router from 'preact-router';
import {createHashHistory} from "history";
import Home from './routes/home';
import Fisica from './routes/fisica';
import VlDiGeometria from './routes/vldigeometria';
import MingwInstall from './routes/mingwinstall';
import Footer from './components/Parts/Footer';
import Statistica from './routes/statistica';
import OttimizzazioneLineare from "./routes/OttimizzazioneLineare";
import BasiDiDati from './routes/basiDiDati';
import CalcoloNumerico from './routes/calcoloNumerico';
import ApprendimentoSistemiArtificiali from "./routes/apprendimentoSistemiArtificiali";
import LatexRenderColor from "./contexts/LatexRenderColor";

// noinspection JSUnusedGlobalSymbols
export default function(props) {
	throw new Error("SENTRYTEST");
	return (
		<div id="app">
			<LatexRenderColor.Provider value={"White"}>
				<h1><a href="/">Appuntiweb</a> <small>di <a href="https://steffo.eu/">Steffo</a></small></h1>
				<Router history={createHashHistory()}>
					<Home path="/"/>
					<Fisica path="/fisica"/>
					<VlDiGeometria path="/vldigeometria"/>
					<MingwInstall path="/mingwinstall"/>
					<Statistica path="/statistica"/>
					<OttimizzazioneLineare path="/ottimizzazionelineare"/>
					<BasiDiDati path="/basididati"/>
					<CalcoloNumerico path="/calcolonumerico"/>
					<ApprendimentoSistemiArtificiali path={"/apprendimentosistemiartificiali"}/>
				</Router>
				<Footer/>
			</LatexRenderColor.Provider>
		</div>
	);
}
