import type { App } from 'vue'
import { ElRow, ElCol } from 'element-plus'

export default (app: App) => {
  app.use(ElRow)
  app.use(ElCol)
}
