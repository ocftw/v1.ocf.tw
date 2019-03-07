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
    fstring = """{event_id}:
  title: "{title}"
  description: "{description}"
  month: "{month}"
  start: {start}
  end: {end}
  link:
    - title: {link_tl1}
      url: {link1}
    - title: {link_tl2}
      url: {link2}
  cover: {cover}
  contributor_id: {contributor_id}
  project_id:
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
    print(fstring.format(**row))
