import { readFileSync } from 'fs'
import { join } from 'path'
import { load } from 'js-yaml'
import signale from 'signale'

export default (localesDir: string, locale: string) => {
  const path = join(localesDir, `${locale}.yml`)
  const content = readFileSync(path, 'utf8')
  try {
    return load(content, { json: true })
  } catch (e) {
    signale.fatal({ prefix: '[i18n]', message: e })
    return {}
  }
}
