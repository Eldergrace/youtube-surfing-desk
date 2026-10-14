const YOUTUBE_SURFING_CONTROL_MASTER = {
  "meta": {
    "name": "YouTube Surfing Control Master",
    "version": "1.1",
    "description": "YouTube Surfing Desk Ver.1.1 用 HOW / FILTER / DISCOVERY 外部マスター",
    "schema": "how + filters + discovery",
    "design_rules": [
      "HOWは動画の見方だけを表す",
      "FILTERは時代・場所など検索範囲を表す",
      "DISCOVERYは検索語へ単語を追加せず、次のTOPIC候補を生成する",
      "BASE QUERYは別状態として保持し、このマスターでは変更しない",
      "同一グループ内は原則単一選択とする",
      "選択済み項目の再クリックで解除可能とする"
    ]
  },
  "how": {
    "selection_mode": "single",
    "allow_none": true,
    "items": [
      {
        "id": "H01",
        "key": "short",
        "label": "短く見る",
        "description": "短時間で見られる動画を探す",
        "query_behavior": {
          "mode": "transform",
          "default_terms": [
            "短時間"
          ],
          "by_content_type": {
            "knowledge": [
              "5分",
              "解説"
            ],
            "entertainment": [
              "ショート"
            ],
            "ambient": [
              "短時間"
            ],
            "hobby": [
              "短時間"
            ],
            "travel": [
              "短時間"
            ],
            "general": [
              "短時間"
            ]
          }
        }
      },
      {
        "id": "H02",
        "key": "long",
        "label": "じっくり見る",
        "description": "長時間・長編の動画を探す",
        "query_behavior": {
          "mode": "transform",
          "default_terms": [
            "長時間"
          ],
          "by_content_type": {
            "knowledge": [
              "長時間",
              "解説"
            ],
            "entertainment": [
              "完全版"
            ],
            "ambient": [
              "長時間"
            ],
            "hobby": [
              "長編"
            ],
            "travel": [
              "長時間"
            ],
            "general": [
              "長時間"
            ]
          }
        }
      },
      {
        "id": "H03",
        "key": "easy",
        "label": "やさしく見る",
        "description": "初心者向け・分かりやすい動画を探す",
        "query_behavior": {
          "mode": "transform",
          "default_terms": [
            "初心者",
            "わかりやすい"
          ],
          "by_content_type": {
            "knowledge": [
              "初心者",
              "わかりやすい"
            ],
            "hobby": [
              "初心者",
              "入門"
            ],
            "entertainment": [
              "初心者向け"
            ],
            "ambient": [],
            "travel": [
              "初心者"
            ],
            "general": [
              "初心者",
              "わかりやすい"
            ]
          }
        }
      },
      {
        "id": "H04",
        "key": "visual",
        "label": "映像中心",
        "description": "説明より映像を楽しむ動画を探す",
        "query_behavior": {
          "mode": "transform",
          "default_terms": [
            "映像"
          ],
          "by_content_type": {
            "knowledge": [
              "映像",
              "図解"
            ],
            "hobby": [
              "実演",
              "映像"
            ],
            "entertainment": [
              "映像"
            ],
            "ambient": [
              "POV"
            ],
            "travel": [
              "POV"
            ],
            "general": [
              "映像"
            ]
          }
        }
      },
      {
        "id": "H05",
        "key": "listen",
        "label": "聴く",
        "description": "音声中心・対談・ラジオ系を探す",
        "query_behavior": {
          "mode": "transform",
          "default_terms": [
            "対談"
          ],
          "by_content_type": {
            "knowledge": [
              "対談"
            ],
            "hobby": [
              "トーク"
            ],
            "entertainment": [
              "ラジオ"
            ],
            "ambient": [
              "環境音"
            ],
            "travel": [
              "音声"
            ],
            "general": [
              "対談"
            ]
          }
        }
      },
      {
        "id": "H06",
        "key": "relax",
        "label": "のんびり見る",
        "description": "リラックスして楽しめる動画を探す",
        "query_behavior": {
          "mode": "transform",
          "default_terms": [
            "のんびり"
          ],
          "by_content_type": {
            "knowledge": [
              "ゆっくり解説"
            ],
            "hobby": [
              "のんびり"
            ],
            "entertainment": [
              "リラックス"
            ],
            "ambient": [
              "長時間"
            ],
            "travel": [
              "のんびり"
            ],
            "general": [
              "リラックス"
            ]
          }
        }
      },
      {
        "id": "H07",
        "key": "demo",
        "label": "実演を見る",
        "description": "実際の操作・制作・使用場面を探す",
        "query_behavior": {
          "mode": "add",
          "default_terms": [
            "実演"
          ]
        }
      },
      {
        "id": "H08",
        "key": "documentary",
        "label": "ドキュメンタリー",
        "description": "記録映像・現場密着・ドキュメンタリー系を探す",
        "query_behavior": {
          "mode": "add",
          "default_terms": [
            "ドキュメンタリー"
          ]
        }
      }
    ]
  },
  "filters": {
    "time": {
      "id": "F_TIME",
      "label": "時代",
      "selection_mode": "single",
      "allow_none": true,
      "items": [
        {
          "id": "FT00",
          "key": "none",
          "label": "指定なし",
          "query_terms": []
        },
        {
          "id": "FT01",
          "key": "latest",
          "label": "最新",
          "query_terms": [
            "最新"
          ]
        },
        {
          "id": "FT02",
          "key": "current",
          "label": "現在",
          "query_terms": [
            "現在"
          ]
        },
        {
          "id": "FT03",
          "key": "2000s",
          "label": "2000年代",
          "query_terms": [
            "2000年代"
          ]
        },
        {
          "id": "FT04",
          "key": "1990s",
          "label": "1990年代",
          "query_terms": [
            "1990年代"
          ]
        },
        {
          "id": "FT05",
          "key": "1980s",
          "label": "1980年代",
          "query_terms": [
            "1980年代"
          ]
        },
        {
          "id": "FT06",
          "key": "heisei",
          "label": "平成",
          "query_terms": [
            "平成"
          ]
        },
        {
          "id": "FT07",
          "key": "showa",
          "label": "昭和",
          "query_terms": [
            "昭和"
          ]
        },
        {
          "id": "FT08",
          "key": "postwar",
          "label": "戦後",
          "query_terms": [
            "戦後"
          ]
        },
        {
          "id": "FT09",
          "key": "prewar",
          "label": "戦前",
          "query_terms": [
            "戦前"
          ]
        }
      ]
    },
    "place": {
      "id": "F_PLACE",
      "label": "場所",
      "selection_mode": "single",
      "allow_none": true,
      "items": [
        {
          "id": "FP00",
          "key": "none",
          "label": "指定なし",
          "query_terms": []
        },
        {
          "id": "FP01",
          "key": "japan",
          "label": "日本",
          "query_terms": [
            "日本"
          ]
        },
        {
          "id": "FP02",
          "key": "overseas",
          "label": "海外",
          "query_terms": [
            "海外"
          ]
        },
        {
          "id": "FP03",
          "key": "world",
          "label": "世界",
          "query_terms": [
            "世界"
          ]
        },
        {
          "id": "FP04",
          "key": "country",
          "label": "国・地域を選ぶ",
          "query_terms": [],
          "opens_selector": "country_region"
        }
      ],
      "country_region_selector": {
        "selection_mode": "single",
        "items": [
          {
            "id": "CR01",
            "label": "アメリカ",
            "query_terms": [
              "アメリカ"
            ]
          },
          {
            "id": "CR02",
            "label": "イギリス",
            "query_terms": [
              "イギリス"
            ]
          },
          {
            "id": "CR03",
            "label": "フランス",
            "query_terms": [
              "フランス"
            ]
          },
          {
            "id": "CR04",
            "label": "ドイツ",
            "query_terms": [
              "ドイツ"
            ]
          },
          {
            "id": "CR05",
            "label": "イタリア",
            "query_terms": [
              "イタリア"
            ]
          },
          {
            "id": "CR06",
            "label": "スペイン",
            "query_terms": [
              "スペイン"
            ]
          },
          {
            "id": "CR07",
            "label": "韓国",
            "query_terms": [
              "韓国"
            ]
          },
          {
            "id": "CR08",
            "label": "台湾",
            "query_terms": [
              "台湾"
            ]
          },
          {
            "id": "CR09",
            "label": "中国",
            "query_terms": [
              "中国"
            ]
          },
          {
            "id": "CR10",
            "label": "インド",
            "query_terms": [
              "インド"
            ]
          },
          {
            "id": "CR11",
            "label": "東南アジア",
            "query_terms": [
              "東南アジア"
            ]
          },
          {
            "id": "CR12",
            "label": "北欧",
            "query_terms": [
              "北欧"
            ]
          },
          {
            "id": "CR13",
            "label": "中東",
            "query_terms": [
              "中東"
            ]
          },
          {
            "id": "CR14",
            "label": "アフリカ",
            "query_terms": [
              "アフリカ"
            ]
          },
          {
            "id": "CR15",
            "label": "オセアニア",
            "query_terms": [
              "オセアニア"
            ]
          },
          {
            "id": "CR16",
            "label": "南米",
            "query_terms": [
              "南米"
            ]
          }
        ]
      }
    }
  },
  "discovery": {
    "selection_mode": "action",
    "items": [
      {
        "id": "D01",
        "key": "related",
        "label": "関連へ",
        "description": "現在のTOPICに関連する別TOPIC候補を表示する",
        "behavior": {
          "type": "topic_navigation",
          "direction": "lateral",
          "mutates_query": false,
          "candidate_count": 6
        }
      },
      {
        "id": "D02",
        "key": "narrower",
        "label": "もっと細かく",
        "description": "現在TOPICの下位概念・Dynamic Subtopic候補を表示する",
        "behavior": {
          "type": "topic_navigation",
          "direction": "down",
          "mutates_query": false,
          "candidate_count": 6
        }
      },
      {
        "id": "D03",
        "key": "broader",
        "label": "広げる",
        "description": "現在TOPICの上位概念・関連CATEGORY候補を表示する",
        "behavior": {
          "type": "topic_navigation",
          "direction": "up",
          "mutates_query": false,
          "candidate_count": 4
        }
      },
      {
        "id": "D04",
        "key": "surprise_neighbor",
        "label": "意外な隣へ",
        "description": "現在TOPICから意味的に少し離れた関連TOPIC候補を表示する",
        "behavior": {
          "type": "topic_navigation",
          "direction": "semantic_jump",
          "mutates_query": false,
          "candidate_count": 5
        }
      },
      {
        "id": "D05",
        "key": "random",
        "label": "ランダム",
        "description": "別分野も含めてランダムなTOPIC候補を表示する",
        "behavior": {
          "type": "topic_navigation",
          "direction": "random",
          "mutates_query": false,
          "candidate_count": 5,
          "default_scope": "cross_domain"
        }
      }
    ]
  },
  "query_assembly": {
    "priority": [
      "base_query",
      "selected_topic",
      "how",
      "filter_time",
      "filter_place"
    ],
    "rules": [
      "BASE QUERYが存在する場合は必ず保持する",
      "DOMAIN/CATEGORYは原則検索語へ自動追加しない",
      "TOPICはBASE QUERYが空の場合に検索語の基礎語として使う",
      "BASE QUERYが存在しTOPICも選択されている場合、TOPIC追加はUI上の明示操作を必要とする",
      "HOWはquery_behaviorに従って追加・変換する",
      "FILTERは選択されたquery_termsを追加する",
      "重複語はQuery Cleanerで除去する",
      "DISCOVERYは検索語を直接変更しない"
    ]
  }
};
