import 'core-js/stable'
import 'regenerator-runtime/runtime'
import 'url-polyfill'
import 'url-search-params-polyfill'
import { SceneIntegrator } from '@things-scene/things-board-integration'

export function init({ models, sceneName, license, callback }) {
  var fit = 'both' // 'both', 'ratio', 'center', 'none'

  var integrator = SceneIntegrator.instance({
    models: models,
    sceneProvider: 'local',
    license
  })

  integrator.integrate({
    target: document.getElementById('scene-viewer'),
    sceneName: sceneName,
    callback
  })
}
