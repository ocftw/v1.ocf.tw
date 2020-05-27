import urllib.request
import csv
import codecs

# 2019: https://docs.google.com/spreadsheets/d/e/2PACX-1vR_yogdgGNd7jKclNv6mxyWkCHDETolM3jWqarNL8XVXY27qbsGKjttzYK_g2gAXD1glh0alhlln3-B/pub?output=csv
url = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vR_yogdgGNd7jKclNv6mxyWkCHDETolM3jWqarNL8XVXY27qbsGKjttzYK_g2gAXD1glh0alhlln3-B/pub?output=csv';
headers = {};
req = urllib.request.Request(url, headers=headers);
resp = urllib.request.urlopen(req);
respE = codecs.iterdecode(resp, 'utf-8')

reader = csv.DictReader(respE)
for row in reader:
    #print(row['event_id'])
    fstring1 = """{event_id}:
  name: "{name}"
  name_en: "{name_en}"
  description: "{description}"
  month: "{month}"
  start: {start}
  end: {end}
  link:"""
    fstring2 = """    - title: {link_tl1}
      url: {link1}""" if row['link1'] else None
    fstring3 = """    - title: {link_tl2}
      url: {link2}""" if row['link2'] else None
    fstring4 = """  cover: {cover_image}
  contributor_id:"""
    fstring5 = '\n'.join([ "    - "+c for c in row['contributor_id'].split(';')])
    fstring6 = """  project_id:
    - {project_id}
  label: {label}
  organizer_id: {organizer_id}
  advisor_id: {advisor_id}
  co-organizer_id: {co-organizer_id}
  implementer_id: {implementer_id}
  sponsor_id: {sponsor_id}
  coordinator_id: {coordinator_id}
  host_id: {host_id}
  speaker_id: {speaker_id}
  banner: {banner}
  avatar: {avatar}"""
    print(fstring1.format(**row))
    if fstring2: print(fstring2.format(**row))
    if fstring3: print(fstring3.format(**row))
    print(fstring4.format(**row))
    print(fstring5.format(**row))
    print(fstring6.format(**row))
