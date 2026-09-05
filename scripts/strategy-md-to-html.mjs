import fs from 'node:fs'

const input = process.argv[2]
const output = process.argv[3]
const lines = fs.readFileSync(input, 'utf8').replace(/\r/g, '').split('\n')
const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
const inline = (s) => esc(s)
  .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
  .replace(/`([^`]+)`/g, '<code>$1</code>')
  .replace(/\[([^\]]+)\]\((https?:\/\/[^)]+)\)/g, '<a href="$2">$1</a>')

let body = ''
let inCode = false
let inList = false
let i = 0

const closeList = () => { if (inList) { body += '</ul>'; inList = false } }

while (i < lines.length) {
  const line = lines[i]
  if (line.startsWith('```')) {
    closeList()
    body += inCode ? '</code></pre>' : '<pre><code>'
    inCode = !inCode
    i++
    continue
  }
  if (inCode) { body += `${esc(line)}\n`; i++; continue }
  if (/^\|.*\|$/.test(line) && i + 1 < lines.length && /^\|(?:\s*:?-+:?\s*\|)+$/.test(lines[i + 1])) {
    closeList()
    const rows = []
    rows.push(line)
    i += 2
    while (i < lines.length && /^\|.*\|$/.test(lines[i])) rows.push(lines[i++])
    body += '<table>'
    rows.forEach((row, ri) => {
      const cells = row.slice(1, -1).split('|').map((c) => c.trim())
      body += `<tr>${cells.map((c) => `<${ri === 0 ? 'th' : 'td'}>${inline(c)}</${ri === 0 ? 'th' : 'td'}>`).join('')}</tr>`
    })
    body += '</table>'
    continue
  }
  const heading = line.match(/^(#{1,4})\s+(.+)$/)
  if (heading) {
    closeList()
    const level = heading[1].length
    body += `<h${level}>${inline(heading[2])}</h${level}>`
    i++
    continue
  }
  if (/^-\s+/.test(line)) {
    if (!inList) { body += '<ul>'; inList = true }
    body += `<li>${inline(line.replace(/^-\s+/, ''))}</li>`
    i++
    continue
  }
  closeList()
  if (/^>\s?/.test(line)) body += `<div class="callout">${inline(line.replace(/^>\s?/, ''))}</div>`
  else if (line.trim()) body += `<p>${inline(line)}</p>`
  i++
}
closeList()

const html = `<!doctype html><html><head><meta charset="utf-8"><title>Brolly SEO Strategy</title>
<style>
@page{margin:1in}body{font-family:Arial,sans-serif;color:#202124;line-height:1.55;max-width:900px;margin:auto}
h1{font-size:28pt;color:#111;margin:0 0 8px;border-bottom:6px solid #f4d03f;padding-bottom:14px}
h2{font-size:20pt;color:#111;margin-top:34px;border-left:5px solid #f4d03f;padding-left:12px}
h3{font-size:15pt;color:#282828;margin-top:24px}h4{font-size:12pt;color:#444}
p,li{font-size:10.5pt}a{color:#1155cc}code{font-family:Consolas,monospace;background:#f1f3f4;padding:1px 4px}
pre{white-space:pre-wrap;background:#111;color:#f8f8f2;padding:16px;border-radius:8px;font-size:8.5pt}
table{border-collapse:collapse;width:100%;margin:14px 0 22px;font-size:9.5pt}th{background:#111;color:#fff;text-align:left}
th,td{border:1px solid #dadce0;padding:8px;vertical-align:top}tr:nth-child(even) td{background:#f8f9fa}
.callout{background:#fff8cc;border-left:5px solid #f4d03f;padding:12px 14px;margin:14px 0;font-size:10.5pt}
</style></head><body>${body}</body></html>`
fs.writeFileSync(output, html)
