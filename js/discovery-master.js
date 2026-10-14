const YOUTUBE_SURFING_DISCOVERY_MASTER = {
  "meta": {
    "name": "YouTube Surfing Discovery Master",
    "version": "1.0",
    "description": "Pilot real-data Discovery Master for major TOPICs. Generic '基礎/応用/歴史/仕組み/現場/最新研究' fallback is not used.",
    "source_category_master": "YouTube Surfing Category Master Ver.1.3",
    "coverage": {
      "registered_topics": 24,
      "total_category_topics": 657,
      "coverage_percent": 3.65,
      "selection_policy": "24 major TOPICs, 3 from each DOMAIN, for initial validation"
    },
    "rules": [
      "DISCOVERY changes navigation candidates; it does not directly append words to GENERATED QUERY.",
      "related should primarily point to existing Category Master TOPIC IDs.",
      "narrower uses explicit Dynamic Subtopics prepared for the source TOPIC.",
      "broader points to CATEGORY or DOMAIN navigation targets.",
      "surprise points to deliberately cross-category/cross-domain candidates.",
      "If a TOPIC is not registered, 'もっと細かく' must not use a generic word template; UI should show unregistered/disabled state.",
      "Dynamic Subtopics are not permanent Category Master Level-4 entries."
    ]
  },
  "topics": [
    {
      "topic_id": "T_C01_01",
      "label": "数学",
      "domain_id": "D01",
      "domain": "学問・教養",
      "category_id": "C01",
      "category": "数学・論理",
      "actions": {
        "related": [
          {
            "type": "topic",
            "topic_id": "T_C01_03",
            "label": "代数学",
            "category_id": "C01",
            "domain_id": "D01"
          },
          {
            "type": "topic",
            "topic_id": "T_C01_04",
            "label": "幾何学",
            "category_id": "C01",
            "domain_id": "D01"
          },
          {
            "type": "topic",
            "topic_id": "T_C01_06",
            "label": "確率",
            "category_id": "C01",
            "domain_id": "D01"
          },
          {
            "type": "topic",
            "topic_id": "T_C01_07",
            "label": "統計",
            "category_id": "C01",
            "domain_id": "D01"
          },
          {
            "type": "topic",
            "topic_id": "T_C01_08",
            "label": "数論",
            "category_id": "C01",
            "domain_id": "D01"
          }
        ],
        "narrower": [
          {
            "type": "dynamic_subtopic",
            "id": "DS_T_C01_01_01",
            "label": "数学の基礎"
          },
          {
            "type": "dynamic_subtopic",
            "id": "DS_T_C01_01_02",
            "label": "数学的証明"
          },
          {
            "type": "dynamic_subtopic",
            "id": "DS_T_C01_01_03",
            "label": "方程式"
          },
          {
            "type": "dynamic_subtopic",
            "id": "DS_T_C01_01_04",
            "label": "関数"
          },
          {
            "type": "dynamic_subtopic",
            "id": "DS_T_C01_01_05",
            "label": "無限"
          },
          {
            "type": "dynamic_subtopic",
            "id": "DS_T_C01_01_06",
            "label": "数学の未解決問題"
          }
        ],
        "broader": [
          {
            "type": "category",
            "category_id": "C01",
            "label": "数学・論理",
            "domain_id": "D01"
          },
          {
            "type": "domain",
            "domain_id": "D01",
            "label": "学問・教養"
          }
        ],
        "surprise": [
          {
            "type": "topic",
            "topic_id": "T_C09_05",
            "label": "量子力学",
            "category_id": "C09",
            "domain_id": "D02"
          },
          {
            "type": "topic",
            "topic_id": "T_C19_08",
            "label": "アルゴリズム",
            "category_id": "C19",
            "domain_id": "D03"
          },
          {
            "type": "topic",
            "topic_id": "T_C01_10",
            "label": "数学パズル",
            "category_id": "C01",
            "domain_id": "D01"
          },
          {
            "type": "topic",
            "topic_id": "T_C18_01",
            "label": "コンピュータ",
            "category_id": "C18",
            "domain_id": "D03"
          }
        ]
      }
    },
    {
      "topic_id": "T_C02_01",
      "label": "日本史",
      "domain_id": "D01",
      "domain": "学問・教養",
      "category_id": "C02",
      "category": "歴史",
      "actions": {
        "related": [
          {
            "type": "topic",
            "topic_id": "T_C02_02",
            "label": "世界史",
            "category_id": "C02",
            "domain_id": "D01"
          },
          {
            "type": "topic",
            "topic_id": "T_C02_05",
            "label": "近代史",
            "category_id": "C02",
            "domain_id": "D01"
          },
          {
            "type": "topic",
            "topic_id": "T_C02_06",
            "label": "現代史",
            "category_id": "C02",
            "domain_id": "D01"
          },
          {
            "type": "topic",
            "topic_id": "T_C02_07",
            "label": "戦国時代",
            "category_id": "C02",
            "domain_id": "D01"
          },
          {
            "type": "topic",
            "topic_id": "T_C02_08",
            "label": "幕末",
            "category_id": "C02",
            "domain_id": "D01"
          },
          {
            "type": "topic",
            "topic_id": "T_C02_12",
            "label": "考古学",
            "category_id": "C02",
            "domain_id": "D01"
          }
        ],
        "narrower": [
          {
            "type": "dynamic_subtopic",
            "id": "DS_T_C02_01_01",
            "label": "古代日本"
          },
          {
            "type": "dynamic_subtopic",
            "id": "DS_T_C02_01_02",
            "label": "奈良時代"
          },
          {
            "type": "dynamic_subtopic",
            "id": "DS_T_C02_01_03",
            "label": "平安時代"
          },
          {
            "type": "dynamic_subtopic",
            "id": "DS_T_C02_01_04",
            "label": "鎌倉時代"
          },
          {
            "type": "dynamic_subtopic",
            "id": "DS_T_C02_01_05",
            "label": "江戸時代"
          },
          {
            "type": "dynamic_subtopic",
            "id": "DS_T_C02_01_06",
            "label": "明治時代"
          }
        ],
        "broader": [
          {
            "type": "category",
            "category_id": "C02",
            "label": "歴史",
            "domain_id": "D01"
          },
          {
            "type": "domain",
            "domain_id": "D01",
            "label": "学問・教養"
          }
        ],
        "surprise": [
          {
            "type": "topic",
            "topic_id": "T_C03_09",
            "label": "地政学",
            "category_id": "C03",
            "domain_id": "D01"
          },
          {
            "type": "search_seed",
            "label": "日本文化"
          },
          {
            "type": "topic",
            "topic_id": "T_C31_10",
            "label": "政治史",
            "category_id": "C31",
            "domain_id": "D04"
          },
          {
            "type": "topic",
            "topic_id": "T_C02_12",
            "label": "考古学",
            "category_id": "C02",
            "domain_id": "D01"
          }
        ]
      }
    },
    {
      "topic_id": "T_C06_01",
      "label": "心理学",
      "domain_id": "D01",
      "domain": "学問・教養",
      "category_id": "C06",
      "category": "心理・認知",
      "actions": {
        "related": [
          {
            "type": "topic",
            "topic_id": "T_C06_02",
            "label": "認知科学",
            "category_id": "C06",
            "domain_id": "D01"
          },
          {
            "type": "topic",
            "topic_id": "T_C06_03",
            "label": "記憶",
            "category_id": "C06",
            "domain_id": "D01"
          },
          {
            "type": "topic",
            "topic_id": "T_C06_05",
            "label": "意思決定",
            "category_id": "C06",
            "domain_id": "D01"
          },
          {
            "type": "topic",
            "topic_id": "T_C06_06",
            "label": "感情",
            "category_id": "C06",
            "domain_id": "D01"
          },
          {
            "type": "topic",
            "topic_id": "T_C06_09",
            "label": "社会心理",
            "category_id": "C06",
            "domain_id": "D01"
          }
        ],
        "narrower": [
          {
            "type": "dynamic_subtopic",
            "id": "DS_T_C06_01_01",
            "label": "認知心理学"
          },
          {
            "type": "dynamic_subtopic",
            "id": "DS_T_C06_01_02",
            "label": "発達心理学"
          },
          {
            "type": "dynamic_subtopic",
            "id": "DS_T_C06_01_03",
            "label": "臨床心理学"
          },
          {
            "type": "dynamic_subtopic",
            "id": "DS_T_C06_01_04",
            "label": "社会心理学"
          },
          {
            "type": "dynamic_subtopic",
            "id": "DS_T_C06_01_05",
            "label": "行動心理学"
          },
          {
            "type": "dynamic_subtopic",
            "id": "DS_T_C06_01_06",
            "label": "心理実験"
          }
        ],
        "broader": [
          {
            "type": "category",
            "category_id": "C06",
            "label": "心理・認知",
            "domain_id": "D01"
          },
          {
            "type": "domain",
            "domain_id": "D01",
            "label": "学問・教養"
          }
        ],
        "surprise": [
          {
            "type": "topic",
            "topic_id": "T_C06_10",
            "label": "脳と心",
            "category_id": "C06",
            "domain_id": "D01"
          },
          {
            "type": "topic",
            "topic_id": "T_C06_07",
            "label": "コミュニケーション",
            "category_id": "C06",
            "domain_id": "D01"
          },
          {
            "type": "topic",
            "topic_id": "T_C39_02",
            "label": "教育",
            "category_id": "C39",
            "domain_id": "D05"
          },
          {
            "type": "topic",
            "topic_id": "T_C06_05",
            "label": "意思決定",
            "category_id": "C06",
            "domain_id": "D01"
          }
        ]
      }
    },
    {
      "topic_id": "T_C09_05",
      "label": "量子力学",
      "domain_id": "D02",
      "domain": "科学・自然",
      "category_id": "C09",
      "category": "物理学",
      "actions": {
        "related": [
          {
            "type": "topic",
            "topic_id": "T_C09_06",
            "label": "相対性理論",
            "category_id": "C09",
            "domain_id": "D02"
          },
          {
            "type": "topic",
            "topic_id": "T_C09_10",
            "label": "量子場理論",
            "category_id": "C09",
            "domain_id": "D02"
          },
          {
            "type": "topic",
            "topic_id": "T_C09_07",
            "label": "素粒子物理学",
            "category_id": "C09",
            "domain_id": "D02"
          },
          {
            "type": "topic",
            "topic_id": "T_C09_09",
            "label": "物性物理学",
            "category_id": "C09",
            "domain_id": "D02"
          },
          {
            "type": "topic",
            "topic_id": "T_C09_11",
            "label": "重力",
            "category_id": "C09",
            "domain_id": "D02"
          }
        ],
        "narrower": [
          {
            "type": "dynamic_subtopic",
            "id": "DS_T_C09_05_01",
            "label": "波動関数"
          },
          {
            "type": "dynamic_subtopic",
            "id": "DS_T_C09_05_02",
            "label": "シュレーディンガー方程式"
          },
          {
            "type": "dynamic_subtopic",
            "id": "DS_T_C09_05_03",
            "label": "不確定性原理"
          },
          {
            "type": "dynamic_subtopic",
            "id": "DS_T_C09_05_04",
            "label": "量子もつれ"
          },
          {
            "type": "dynamic_subtopic",
            "id": "DS_T_C09_05_05",
            "label": "量子測定"
          },
          {
            "type": "dynamic_subtopic",
            "id": "DS_T_C09_05_06",
            "label": "量子トンネル"
          }
        ],
        "broader": [
          {
            "type": "category",
            "category_id": "C09",
            "label": "物理学",
            "domain_id": "D02"
          },
          {
            "type": "domain",
            "domain_id": "D02",
            "label": "科学・自然"
          }
        ],
        "surprise": [
          {
            "type": "topic",
            "topic_id": "T_C17_02",
            "label": "生成AI",
            "category_id": "C17",
            "domain_id": "D03"
          },
          {
            "type": "topic",
            "topic_id": "T_C01_01",
            "label": "数学",
            "category_id": "C01",
            "domain_id": "D01"
          },
          {
            "type": "topic",
            "topic_id": "T_C21_01",
            "label": "半導体",
            "category_id": "C21",
            "domain_id": "D03"
          },
          {
            "type": "topic",
            "topic_id": "T_C13_06",
            "label": "宇宙論",
            "category_id": "C13",
            "domain_id": "D02"
          }
        ]
      }
    },
    {
      "topic_id": "T_C13_05",
      "label": "ブラックホール",
      "domain_id": "D02",
      "domain": "科学・自然",
      "category_id": "C13",
      "category": "天文学・宇宙",
      "actions": {
        "related": [
          {
            "type": "topic",
            "topic_id": "T_C13_04",
            "label": "銀河",
            "category_id": "C13",
            "domain_id": "D02"
          },
          {
            "type": "topic",
            "topic_id": "T_C13_06",
            "label": "宇宙論",
            "category_id": "C13",
            "domain_id": "D02"
          },
          {
            "type": "topic",
            "topic_id": "T_C13_07",
            "label": "ビッグバン",
            "category_id": "C13",
            "domain_id": "D02"
          },
          {
            "type": "topic",
            "topic_id": "T_C13_03",
            "label": "恒星",
            "category_id": "C13",
            "domain_id": "D02"
          },
          {
            "type": "topic",
            "topic_id": "T_C13_10",
            "label": "宇宙観測",
            "category_id": "C13",
            "domain_id": "D02"
          }
        ],
        "narrower": [
          {
            "type": "dynamic_subtopic",
            "id": "DS_T_C13_05_01",
            "label": "事象の地平面"
          },
          {
            "type": "dynamic_subtopic",
            "id": "DS_T_C13_05_02",
            "label": "降着円盤"
          },
          {
            "type": "dynamic_subtopic",
            "id": "DS_T_C13_05_03",
            "label": "重力波"
          },
          {
            "type": "dynamic_subtopic",
            "id": "DS_T_C13_05_04",
            "label": "超大質量ブラックホール"
          },
          {
            "type": "dynamic_subtopic",
            "id": "DS_T_C13_05_05",
            "label": "ブラックホール撮像"
          },
          {
            "type": "dynamic_subtopic",
            "id": "DS_T_C13_05_06",
            "label": "ホーキング放射"
          }
        ],
        "broader": [
          {
            "type": "category",
            "category_id": "C13",
            "label": "天文学・宇宙",
            "domain_id": "D02"
          },
          {
            "type": "domain",
            "domain_id": "D02",
            "label": "科学・自然"
          }
        ],
        "surprise": [
          {
            "type": "topic",
            "topic_id": "T_C09_06",
            "label": "相対性理論",
            "category_id": "C09",
            "domain_id": "D02"
          },
          {
            "type": "topic",
            "topic_id": "T_C13_09",
            "label": "宇宙望遠鏡",
            "category_id": "C13",
            "domain_id": "D02"
          },
          {
            "type": "topic",
            "topic_id": "T_C09_11",
            "label": "重力",
            "category_id": "C09",
            "domain_id": "D02"
          },
          {
            "type": "topic",
            "topic_id": "T_C09_05",
            "label": "量子力学",
            "category_id": "C09",
            "domain_id": "D02"
          }
        ]
      }
    },
    {
      "topic_id": "T_C15_03",
      "label": "深海",
      "domain_id": "D02",
      "domain": "科学・自然",
      "category_id": "C15",
      "category": "海洋・深海",
      "actions": {
        "related": [
          {
            "type": "topic",
            "topic_id": "T_C15_04",
            "label": "深海生物",
            "category_id": "C15",
            "domain_id": "D02"
          },
          {
            "type": "topic",
            "topic_id": "T_C15_05",
            "label": "海底",
            "category_id": "C15",
            "domain_id": "D02"
          },
          {
            "type": "topic",
            "topic_id": "T_C15_06",
            "label": "海溝",
            "category_id": "C15",
            "domain_id": "D02"
          },
          {
            "type": "topic",
            "topic_id": "T_C15_07",
            "label": "海洋探査",
            "category_id": "C15",
            "domain_id": "D02"
          },
          {
            "type": "topic",
            "topic_id": "T_C15_08",
            "label": "潜水艇",
            "category_id": "C15",
            "domain_id": "D02"
          }
        ],
        "narrower": [
          {
            "type": "dynamic_subtopic",
            "id": "DS_T_C15_03_01",
            "label": "深海魚"
          },
          {
            "type": "dynamic_subtopic",
            "id": "DS_T_C15_03_02",
            "label": "熱水噴出孔"
          },
          {
            "type": "dynamic_subtopic",
            "id": "DS_T_C15_03_03",
            "label": "深海底"
          },
          {
            "type": "dynamic_subtopic",
            "id": "DS_T_C15_03_04",
            "label": "深海探査機"
          },
          {
            "type": "dynamic_subtopic",
            "id": "DS_T_C15_03_05",
            "label": "マリアナ海溝"
          },
          {
            "type": "dynamic_subtopic",
            "id": "DS_T_C15_03_06",
            "label": "深海の生態系"
          }
        ],
        "broader": [
          {
            "type": "category",
            "category_id": "C15",
            "label": "海洋・深海",
            "domain_id": "D02"
          },
          {
            "type": "domain",
            "domain_id": "D02",
            "label": "科学・自然"
          }
        ],
        "surprise": [
          {
            "type": "topic",
            "topic_id": "T_C63_09",
            "label": "巨大船",
            "category_id": "C63",
            "domain_id": "D08"
          },
          {
            "type": "topic",
            "topic_id": "T_C45_10",
            "label": "自然観察",
            "category_id": "C45",
            "domain_id": "D06"
          },
          {
            "type": "topic",
            "topic_id": "T_C15_10",
            "label": "海洋環境",
            "category_id": "C15",
            "domain_id": "D02"
          },
          {
            "type": "topic",
            "topic_id": "T_C13_10",
            "label": "宇宙観測",
            "category_id": "C13",
            "domain_id": "D02"
          }
        ]
      }
    },
    {
      "topic_id": "T_C17_02",
      "label": "生成AI",
      "domain_id": "D03",
      "domain": "テクノロジー・デジタル",
      "category_id": "C17",
      "category": "AI・機械学習",
      "actions": {
        "related": [
          {
            "type": "topic",
            "topic_id": "T_C17_01",
            "label": "人工知能",
            "category_id": "C17",
            "domain_id": "D03"
          },
          {
            "type": "topic",
            "topic_id": "T_C17_04",
            "label": "LLM",
            "category_id": "C17",
            "domain_id": "D03"
          },
          {
            "type": "topic",
            "topic_id": "T_C17_05",
            "label": "画像生成AI",
            "category_id": "C17",
            "domain_id": "D03"
          },
          {
            "type": "topic",
            "topic_id": "T_C17_06",
            "label": "動画生成AI",
            "category_id": "C17",
            "domain_id": "D03"
          },
          {
            "type": "topic",
            "topic_id": "T_C17_07",
            "label": "AIエージェント",
            "category_id": "C17",
            "domain_id": "D03"
          },
          {
            "type": "topic",
            "topic_id": "T_C17_11",
            "label": "AI活用",
            "category_id": "C17",
            "domain_id": "D03"
          }
        ],
        "narrower": [
          {
            "type": "dynamic_subtopic",
            "id": "DS_T_C17_02_01",
            "label": "大規模言語モデル"
          },
          {
            "type": "dynamic_subtopic",
            "id": "DS_T_C17_02_02",
            "label": "生成AIの仕組み"
          },
          {
            "type": "dynamic_subtopic",
            "id": "DS_T_C17_02_03",
            "label": "プロンプト"
          },
          {
            "type": "dynamic_subtopic",
            "id": "DS_T_C17_02_04",
            "label": "RAG"
          },
          {
            "type": "dynamic_subtopic",
            "id": "DS_T_C17_02_05",
            "label": "マルチモーダルAI"
          },
          {
            "type": "dynamic_subtopic",
            "id": "DS_T_C17_02_06",
            "label": "生成AIエージェント"
          }
        ],
        "broader": [
          {
            "type": "category",
            "category_id": "C17",
            "label": "AI・機械学習",
            "domain_id": "D03"
          },
          {
            "type": "domain",
            "domain_id": "D03",
            "label": "テクノロジー・デジタル"
          }
        ],
        "surprise": [
          {
            "type": "topic",
            "topic_id": "T_C19_01",
            "label": "Python",
            "category_id": "C19",
            "domain_id": "D03"
          },
          {
            "type": "topic",
            "topic_id": "T_C21_01",
            "label": "半導体",
            "category_id": "C21",
            "domain_id": "D03"
          },
          {
            "type": "topic",
            "topic_id": "T_C19_11",
            "label": "自動化",
            "category_id": "C19",
            "domain_id": "D03"
          },
          {
            "type": "search_seed",
            "label": "デジタル制作"
          }
        ]
      }
    },
    {
      "topic_id": "T_C19_01",
      "label": "Python",
      "domain_id": "D03",
      "domain": "テクノロジー・デジタル",
      "category_id": "C19",
      "category": "プログラミング",
      "actions": {
        "related": [
          {
            "type": "topic",
            "topic_id": "T_C19_02",
            "label": "JavaScript",
            "category_id": "C19",
            "domain_id": "D03"
          },
          {
            "type": "topic",
            "topic_id": "T_C19_08",
            "label": "アルゴリズム",
            "category_id": "C19",
            "domain_id": "D03"
          },
          {
            "type": "topic",
            "topic_id": "T_C19_09",
            "label": "Web開発",
            "category_id": "C19",
            "domain_id": "D03"
          },
          {
            "type": "topic",
            "topic_id": "T_C19_11",
            "label": "自動化",
            "category_id": "C19",
            "domain_id": "D03"
          },
          {
            "type": "topic",
            "topic_id": "T_C19_12",
            "label": "Git",
            "category_id": "C19",
            "domain_id": "D03"
          }
        ],
        "narrower": [
          {
            "type": "dynamic_subtopic",
            "id": "DS_T_C19_01_01",
            "label": "Python入門"
          },
          {
            "type": "dynamic_subtopic",
            "id": "DS_T_C19_01_02",
            "label": "データ分析"
          },
          {
            "type": "dynamic_subtopic",
            "id": "DS_T_C19_01_03",
            "label": "Webスクレイピング"
          },
          {
            "type": "dynamic_subtopic",
            "id": "DS_T_C19_01_04",
            "label": "機械学習Python"
          },
          {
            "type": "dynamic_subtopic",
            "id": "DS_T_C19_01_05",
            "label": "自動化スクリプト"
          },
          {
            "type": "dynamic_subtopic",
            "id": "DS_T_C19_01_06",
            "label": "Pythonライブラリ"
          }
        ],
        "broader": [
          {
            "type": "category",
            "category_id": "C19",
            "label": "プログラミング",
            "domain_id": "D03"
          },
          {
            "type": "domain",
            "domain_id": "D03",
            "label": "テクノロジー・デジタル"
          }
        ],
        "surprise": [
          {
            "type": "topic",
            "topic_id": "T_C17_02",
            "label": "生成AI",
            "category_id": "C17",
            "domain_id": "D03"
          },
          {
            "type": "topic",
            "topic_id": "T_C01_07",
            "label": "統計",
            "category_id": "C01",
            "domain_id": "D01"
          },
          {
            "type": "topic",
            "topic_id": "T_C19_07",
            "label": "SQL",
            "category_id": "C19",
            "domain_id": "D03"
          },
          {
            "type": "topic",
            "topic_id": "T_C17_11",
            "label": "AI活用",
            "category_id": "C17",
            "domain_id": "D03"
          }
        ]
      }
    },
    {
      "topic_id": "T_C21_01",
      "label": "半導体",
      "domain_id": "D03",
      "domain": "テクノロジー・デジタル",
      "category_id": "C21",
      "category": "半導体・電子技術",
      "actions": {
        "related": [
          {
            "type": "topic",
            "topic_id": "T_C21_02",
            "label": "トランジスタ",
            "category_id": "C21",
            "domain_id": "D03"
          },
          {
            "type": "topic",
            "topic_id": "T_C21_03",
            "label": "集積回路",
            "category_id": "C21",
            "domain_id": "D03"
          },
          {
            "type": "topic",
            "topic_id": "T_C21_04",
            "label": "CPU製造",
            "category_id": "C21",
            "domain_id": "D03"
          },
          {
            "type": "topic",
            "topic_id": "T_C21_06",
            "label": "電子回路",
            "category_id": "C21",
            "domain_id": "D03"
          },
          {
            "type": "topic",
            "topic_id": "T_C21_10",
            "label": "電子部品",
            "category_id": "C21",
            "domain_id": "D03"
          }
        ],
        "narrower": [
          {
            "type": "dynamic_subtopic",
            "id": "DS_T_C21_01_01",
            "label": "半導体製造工程"
          },
          {
            "type": "dynamic_subtopic",
            "id": "DS_T_C21_01_02",
            "label": "露光装置"
          },
          {
            "type": "dynamic_subtopic",
            "id": "DS_T_C21_01_03",
            "label": "シリコンウェハ"
          },
          {
            "type": "dynamic_subtopic",
            "id": "DS_T_C21_01_04",
            "label": "微細化"
          },
          {
            "type": "dynamic_subtopic",
            "id": "DS_T_C21_01_05",
            "label": "ファウンドリ"
          },
          {
            "type": "dynamic_subtopic",
            "id": "DS_T_C21_01_06",
            "label": "先端パッケージ"
          }
        ],
        "broader": [
          {
            "type": "category",
            "category_id": "C21",
            "label": "半導体・電子技術",
            "domain_id": "D03"
          },
          {
            "type": "domain",
            "domain_id": "D03",
            "label": "テクノロジー・デジタル"
          }
        ],
        "surprise": [
          {
            "type": "topic",
            "topic_id": "T_C18_03",
            "label": "GPU",
            "category_id": "C18",
            "domain_id": "D03"
          },
          {
            "type": "search_seed",
            "label": "AI"
          },
          {
            "type": "topic",
            "topic_id": "T_C29_11",
            "label": "工場",
            "category_id": "C29",
            "domain_id": "D04"
          },
          {
            "type": "topic",
            "topic_id": "T_C10_09",
            "label": "材料化学",
            "category_id": "C10",
            "domain_id": "D02"
          }
        ]
      }
    },
    {
      "topic_id": "T_C26_04",
      "label": "金利",
      "domain_id": "D04",
      "domain": "社会・経済・仕事",
      "category_id": "C26",
      "category": "金融・投資",
      "actions": {
        "related": [
          {
            "type": "topic",
            "topic_id": "T_C26_02",
            "label": "債券",
            "category_id": "C26",
            "domain_id": "D04"
          },
          {
            "type": "topic",
            "topic_id": "T_C25_08",
            "label": "為替",
            "category_id": "C25",
            "domain_id": "D04"
          },
          {
            "type": "topic",
            "topic_id": "T_C26_08",
            "label": "中央銀行",
            "category_id": "C26",
            "domain_id": "D04"
          },
          {
            "type": "topic",
            "topic_id": "T_C26_09",
            "label": "金融市場",
            "category_id": "C26",
            "domain_id": "D04"
          },
          {
            "type": "topic",
            "topic_id": "T_C26_01",
            "label": "株式",
            "category_id": "C26",
            "domain_id": "D04"
          }
        ],
        "narrower": [
          {
            "type": "dynamic_subtopic",
            "id": "DS_T_C26_04_01",
            "label": "政策金利"
          },
          {
            "type": "dynamic_subtopic",
            "id": "DS_T_C26_04_02",
            "label": "長期金利"
          },
          {
            "type": "dynamic_subtopic",
            "id": "DS_T_C26_04_03",
            "label": "短期金利"
          },
          {
            "type": "dynamic_subtopic",
            "id": "DS_T_C26_04_04",
            "label": "イールドカーブ"
          },
          {
            "type": "dynamic_subtopic",
            "id": "DS_T_C26_04_05",
            "label": "金利と債券価格"
          },
          {
            "type": "dynamic_subtopic",
            "id": "DS_T_C26_04_06",
            "label": "金利と為替"
          }
        ],
        "broader": [
          {
            "type": "category",
            "category_id": "C26",
            "label": "金融・投資",
            "domain_id": "D04"
          },
          {
            "type": "domain",
            "domain_id": "D04",
            "label": "社会・経済・仕事"
          }
        ],
        "surprise": [
          {
            "type": "topic",
            "topic_id": "T_C25_04",
            "label": "インフレ",
            "category_id": "C25",
            "domain_id": "D04"
          },
          {
            "type": "topic",
            "topic_id": "T_C25_11",
            "label": "日本経済",
            "category_id": "C25",
            "domain_id": "D04"
          },
          {
            "type": "topic",
            "topic_id": "T_C38_06",
            "label": "住宅費",
            "category_id": "C38",
            "domain_id": "D05"
          },
          {
            "type": "topic",
            "topic_id": "T_C26_08",
            "label": "中央銀行",
            "category_id": "C26",
            "domain_id": "D04"
          }
        ]
      }
    },
    {
      "topic_id": "T_C26_01",
      "label": "株式",
      "domain_id": "D04",
      "domain": "社会・経済・仕事",
      "category_id": "C26",
      "category": "金融・投資",
      "actions": {
        "related": [
          {
            "type": "topic",
            "topic_id": "T_C26_02",
            "label": "債券",
            "category_id": "C26",
            "domain_id": "D04"
          },
          {
            "type": "topic",
            "topic_id": "T_C26_05",
            "label": "投資信託",
            "category_id": "C26",
            "domain_id": "D04"
          },
          {
            "type": "topic",
            "topic_id": "T_C26_06",
            "label": "ETF",
            "category_id": "C26",
            "domain_id": "D04"
          },
          {
            "type": "topic",
            "topic_id": "T_C26_09",
            "label": "金融市場",
            "category_id": "C26",
            "domain_id": "D04"
          },
          {
            "type": "topic",
            "topic_id": "T_C26_10",
            "label": "企業分析",
            "category_id": "C26",
            "domain_id": "D04"
          }
        ],
        "narrower": [
          {
            "type": "dynamic_subtopic",
            "id": "DS_T_C26_01_01",
            "label": "株価指数"
          },
          {
            "type": "dynamic_subtopic",
            "id": "DS_T_C26_01_02",
            "label": "個別株"
          },
          {
            "type": "dynamic_subtopic",
            "id": "DS_T_C26_01_03",
            "label": "配当"
          },
          {
            "type": "dynamic_subtopic",
            "id": "DS_T_C26_01_04",
            "label": "株式市場"
          },
          {
            "type": "dynamic_subtopic",
            "id": "DS_T_C26_01_05",
            "label": "株価評価"
          },
          {
            "type": "dynamic_subtopic",
            "id": "DS_T_C26_01_06",
            "label": "企業決算"
          }
        ],
        "broader": [
          {
            "type": "category",
            "category_id": "C26",
            "label": "金融・投資",
            "domain_id": "D04"
          },
          {
            "type": "domain",
            "domain_id": "D04",
            "label": "社会・経済・仕事"
          }
        ],
        "surprise": [
          {
            "type": "topic",
            "topic_id": "T_C27_02",
            "label": "経営",
            "category_id": "C27",
            "domain_id": "D04"
          },
          {
            "type": "topic",
            "topic_id": "T_C25_02",
            "label": "景気",
            "category_id": "C25",
            "domain_id": "D04"
          },
          {
            "type": "topic",
            "topic_id": "T_C26_09",
            "label": "金融市場",
            "category_id": "C26",
            "domain_id": "D04"
          },
          {
            "type": "topic",
            "topic_id": "T_C27_01",
            "label": "企業",
            "category_id": "C27",
            "domain_id": "D04"
          }
        ]
      }
    },
    {
      "topic_id": "T_C27_02",
      "label": "経営",
      "domain_id": "D04",
      "domain": "社会・経済・仕事",
      "category_id": "C27",
      "category": "ビジネス・企業",
      "actions": {
        "related": [
          {
            "type": "topic",
            "topic_id": "T_C27_01",
            "label": "企業",
            "category_id": "C27",
            "domain_id": "D04"
          },
          {
            "type": "topic",
            "topic_id": "T_C27_04",
            "label": "経営戦略",
            "category_id": "C27",
            "domain_id": "D04"
          },
          {
            "type": "topic",
            "topic_id": "T_C27_05",
            "label": "マーケティング",
            "category_id": "C27",
            "domain_id": "D04"
          },
          {
            "type": "topic",
            "topic_id": "T_C27_03",
            "label": "起業",
            "category_id": "C27",
            "domain_id": "D04"
          },
          {
            "type": "topic",
            "topic_id": "T_C27_11",
            "label": "経営者",
            "category_id": "C27",
            "domain_id": "D04"
          }
        ],
        "narrower": [
          {
            "type": "dynamic_subtopic",
            "id": "DS_T_C27_02_01",
            "label": "経営戦略"
          },
          {
            "type": "dynamic_subtopic",
            "id": "DS_T_C27_02_02",
            "label": "組織運営"
          },
          {
            "type": "dynamic_subtopic",
            "id": "DS_T_C27_02_03",
            "label": "事業計画"
          },
          {
            "type": "dynamic_subtopic",
            "id": "DS_T_C27_02_04",
            "label": "財務管理"
          },
          {
            "type": "dynamic_subtopic",
            "id": "DS_T_C27_02_05",
            "label": "人材マネジメント"
          },
          {
            "type": "dynamic_subtopic",
            "id": "DS_T_C27_02_06",
            "label": "経営改善"
          }
        ],
        "broader": [
          {
            "type": "category",
            "category_id": "C27",
            "label": "ビジネス・企業",
            "domain_id": "D04"
          },
          {
            "type": "domain",
            "domain_id": "D04",
            "label": "社会・経済・仕事"
          }
        ],
        "surprise": [
          {
            "type": "topic",
            "topic_id": "T_C28_05",
            "label": "仕事術",
            "category_id": "C28",
            "domain_id": "D04"
          },
          {
            "type": "topic",
            "topic_id": "T_C27_05",
            "label": "マーケティング",
            "category_id": "C27",
            "domain_id": "D04"
          },
          {
            "type": "topic",
            "topic_id": "T_C26_10",
            "label": "企業分析",
            "category_id": "C26",
            "domain_id": "D04"
          },
          {
            "type": "topic",
            "topic_id": "T_C27_03",
            "label": "起業",
            "category_id": "C27",
            "domain_id": "D04"
          }
        ]
      }
    },
    {
      "topic_id": "T_C33_01",
      "label": "健康",
      "domain_id": "D05",
      "domain": "暮らし・健康",
      "category_id": "C33",
      "category": "健康・医療",
      "actions": {
        "related": [
          {
            "type": "topic",
            "topic_id": "T_C33_03",
            "label": "予防",
            "category_id": "C33",
            "domain_id": "D05"
          },
          {
            "type": "topic",
            "topic_id": "T_C33_10",
            "label": "生活習慣",
            "category_id": "C33",
            "domain_id": "D05"
          },
          {
            "type": "topic",
            "topic_id": "T_C33_05",
            "label": "健康診断",
            "category_id": "C33",
            "domain_id": "D05"
          },
          {
            "type": "topic",
            "topic_id": "T_C33_11",
            "label": "医学",
            "category_id": "C33",
            "domain_id": "D05"
          },
          {
            "type": "topic",
            "topic_id": "T_C33_02",
            "label": "病気",
            "category_id": "C33",
            "domain_id": "D05"
          }
        ],
        "narrower": [
          {
            "type": "dynamic_subtopic",
            "id": "DS_T_C33_01_01",
            "label": "生活習慣改善"
          },
          {
            "type": "dynamic_subtopic",
            "id": "DS_T_C33_01_02",
            "label": "予防医学"
          },
          {
            "type": "dynamic_subtopic",
            "id": "DS_T_C33_01_03",
            "label": "健康管理"
          },
          {
            "type": "dynamic_subtopic",
            "id": "DS_T_C33_01_04",
            "label": "定期健診"
          },
          {
            "type": "dynamic_subtopic",
            "id": "DS_T_C33_01_05",
            "label": "食事と健康"
          },
          {
            "type": "dynamic_subtopic",
            "id": "DS_T_C33_01_06",
            "label": "運動と健康"
          }
        ],
        "broader": [
          {
            "type": "category",
            "category_id": "C33",
            "label": "健康・医療",
            "domain_id": "D05"
          },
          {
            "type": "domain",
            "domain_id": "D05",
            "label": "暮らし・健康"
          }
        ],
        "surprise": [
          {
            "type": "topic",
            "topic_id": "T_C34_01",
            "label": "ウォーキング",
            "category_id": "C34",
            "domain_id": "D05"
          },
          {
            "type": "search_seed",
            "label": "睡眠"
          },
          {
            "type": "topic",
            "topic_id": "T_C35_01",
            "label": "家庭料理",
            "category_id": "C35",
            "domain_id": "D05"
          },
          {
            "type": "topic",
            "topic_id": "T_C40_02",
            "label": "高齢者",
            "category_id": "C40",
            "domain_id": "D05"
          }
        ]
      }
    },
    {
      "topic_id": "T_C34_02",
      "label": "筋トレ",
      "domain_id": "D05",
      "domain": "暮らし・健康",
      "category_id": "C34",
      "category": "運動・フィットネス",
      "actions": {
        "related": [
          {
            "type": "topic",
            "topic_id": "T_C34_01",
            "label": "ウォーキング",
            "category_id": "C34",
            "domain_id": "D05"
          },
          {
            "type": "topic",
            "topic_id": "T_C34_03",
            "label": "ストレッチ",
            "category_id": "C34",
            "domain_id": "D05"
          },
          {
            "type": "topic",
            "topic_id": "T_C34_05",
            "label": "体操",
            "category_id": "C34",
            "domain_id": "D05"
          },
          {
            "type": "topic",
            "topic_id": "T_C34_07",
            "label": "姿勢",
            "category_id": "C34",
            "domain_id": "D05"
          },
          {
            "type": "topic",
            "topic_id": "T_C34_08",
            "label": "体力づくり",
            "category_id": "C34",
            "domain_id": "D05"
          }
        ],
        "narrower": [
          {
            "type": "dynamic_subtopic",
            "id": "DS_T_C34_02_01",
            "label": "自重トレーニング"
          },
          {
            "type": "dynamic_subtopic",
            "id": "DS_T_C34_02_02",
            "label": "筋肥大"
          },
          {
            "type": "dynamic_subtopic",
            "id": "DS_T_C34_02_03",
            "label": "フォーム"
          },
          {
            "type": "dynamic_subtopic",
            "id": "DS_T_C34_02_04",
            "label": "筋力アップ"
          },
          {
            "type": "dynamic_subtopic",
            "id": "DS_T_C34_02_05",
            "label": "高齢者筋トレ"
          },
          {
            "type": "dynamic_subtopic",
            "id": "DS_T_C34_02_06",
            "label": "体幹トレーニング"
          }
        ],
        "broader": [
          {
            "type": "category",
            "category_id": "C34",
            "label": "運動・フィットネス",
            "domain_id": "D05"
          },
          {
            "type": "domain",
            "domain_id": "D05",
            "label": "暮らし・健康"
          }
        ],
        "surprise": [
          {
            "type": "search_seed",
            "label": "食事"
          },
          {
            "type": "topic",
            "topic_id": "T_C34_10",
            "label": "スポーツ医学",
            "category_id": "C34",
            "domain_id": "D05"
          },
          {
            "type": "topic",
            "topic_id": "T_C34_08",
            "label": "体力づくり",
            "category_id": "C34",
            "domain_id": "D05"
          },
          {
            "type": "topic",
            "topic_id": "T_C33_01",
            "label": "健康",
            "category_id": "C33",
            "domain_id": "D05"
          }
        ]
      }
    },
    {
      "topic_id": "T_C35_01",
      "label": "家庭料理",
      "domain_id": "D05",
      "domain": "暮らし・健康",
      "category_id": "C35",
      "category": "食・料理",
      "actions": {
        "related": [
          {
            "type": "topic",
            "topic_id": "T_C35_02",
            "label": "和食",
            "category_id": "C35",
            "domain_id": "D05"
          },
          {
            "type": "topic",
            "topic_id": "T_C35_03",
            "label": "洋食",
            "category_id": "C35",
            "domain_id": "D05"
          },
          {
            "type": "topic",
            "topic_id": "T_C35_04",
            "label": "中華",
            "category_id": "C35",
            "domain_id": "D05"
          },
          {
            "type": "topic",
            "topic_id": "T_C35_08",
            "label": "レシピ",
            "category_id": "C35",
            "domain_id": "D05"
          },
          {
            "type": "topic",
            "topic_id": "T_C35_07",
            "label": "料理技術",
            "category_id": "C35",
            "domain_id": "D05"
          }
        ],
        "narrower": [
          {
            "type": "dynamic_subtopic",
            "id": "DS_T_C35_01_01",
            "label": "時短料理"
          },
          {
            "type": "dynamic_subtopic",
            "id": "DS_T_C35_01_02",
            "label": "作り置き"
          },
          {
            "type": "dynamic_subtopic",
            "id": "DS_T_C35_01_03",
            "label": "一汁三菜"
          },
          {
            "type": "dynamic_subtopic",
            "id": "DS_T_C35_01_04",
            "label": "家庭の和食"
          },
          {
            "type": "dynamic_subtopic",
            "id": "DS_T_C35_01_05",
            "label": "節約料理"
          },
          {
            "type": "dynamic_subtopic",
            "id": "DS_T_C35_01_06",
            "label": "初心者料理"
          }
        ],
        "broader": [
          {
            "type": "category",
            "category_id": "C35",
            "label": "食・料理",
            "domain_id": "D05"
          },
          {
            "type": "domain",
            "domain_id": "D05",
            "label": "暮らし・健康"
          }
        ],
        "surprise": [
          {
            "type": "topic",
            "topic_id": "T_C35_10",
            "label": "食文化",
            "category_id": "C35",
            "domain_id": "D05"
          },
          {
            "type": "search_seed",
            "label": "生活術"
          },
          {
            "type": "topic",
            "topic_id": "T_C33_01",
            "label": "健康",
            "category_id": "C33",
            "domain_id": "D05"
          },
          {
            "type": "topic",
            "topic_id": "T_C64_07",
            "label": "グルメ旅",
            "category_id": "C64",
            "domain_id": "D08"
          }
        ]
      }
    },
    {
      "topic_id": "T_C41_01",
      "label": "カメラ",
      "domain_id": "D06",
      "domain": "趣味・スポーツ・ものづくり",
      "category_id": "C41",
      "category": "カメラ・写真",
      "actions": {
        "related": [
          {
            "type": "topic",
            "topic_id": "T_C41_02",
            "label": "写真",
            "category_id": "C41",
            "domain_id": "D06"
          },
          {
            "type": "topic",
            "topic_id": "T_C41_03",
            "label": "レンズ",
            "category_id": "C41",
            "domain_id": "D06"
          },
          {
            "type": "topic",
            "topic_id": "T_C41_04",
            "label": "撮影",
            "category_id": "C41",
            "domain_id": "D06"
          },
          {
            "type": "topic",
            "topic_id": "T_C41_05",
            "label": "構図",
            "category_id": "C41",
            "domain_id": "D06"
          },
          {
            "type": "topic",
            "topic_id": "T_C41_11",
            "label": "写真編集",
            "category_id": "C41",
            "domain_id": "D06"
          }
        ],
        "narrower": [
          {
            "type": "dynamic_subtopic",
            "id": "DS_T_C41_01_01",
            "label": "カメラの基本設定"
          },
          {
            "type": "dynamic_subtopic",
            "id": "DS_T_C41_01_02",
            "label": "露出"
          },
          {
            "type": "dynamic_subtopic",
            "id": "DS_T_C41_01_03",
            "label": "シャッタースピード"
          },
          {
            "type": "dynamic_subtopic",
            "id": "DS_T_C41_01_04",
            "label": "絞り"
          },
          {
            "type": "dynamic_subtopic",
            "id": "DS_T_C41_01_05",
            "label": "ISO感度"
          },
          {
            "type": "dynamic_subtopic",
            "id": "DS_T_C41_01_06",
            "label": "カメラ選び"
          }
        ],
        "broader": [
          {
            "type": "category",
            "category_id": "C41",
            "label": "カメラ・写真",
            "domain_id": "D06"
          },
          {
            "type": "domain",
            "domain_id": "D06",
            "label": "趣味・スポーツ・ものづくり"
          }
        ],
        "surprise": [
          {
            "type": "topic",
            "topic_id": "T_C41_09",
            "label": "天体写真",
            "category_id": "C41",
            "domain_id": "D06"
          },
          {
            "type": "topic",
            "topic_id": "T_C41_08",
            "label": "野鳥撮影",
            "category_id": "C41",
            "domain_id": "D06"
          },
          {
            "type": "search_seed",
            "label": "デジタル制作"
          },
          {
            "type": "search_seed",
            "label": "街歩き"
          }
        ]
      }
    },
    {
      "topic_id": "T_C43_01",
      "label": "DIY",
      "domain_id": "D06",
      "domain": "趣味・スポーツ・ものづくり",
      "category_id": "C43",
      "category": "DIY・工作",
      "actions": {
        "related": [
          {
            "type": "topic",
            "topic_id": "T_C43_02",
            "label": "木工",
            "category_id": "C43",
            "domain_id": "D06"
          },
          {
            "type": "topic",
            "topic_id": "T_C43_03",
            "label": "工具",
            "category_id": "C43",
            "domain_id": "D06"
          },
          {
            "type": "topic",
            "topic_id": "T_C43_04",
            "label": "電子工作",
            "category_id": "C43",
            "domain_id": "D06"
          },
          {
            "type": "topic",
            "topic_id": "T_C43_05",
            "label": "修理",
            "category_id": "C43",
            "domain_id": "D06"
          },
          {
            "type": "topic",
            "topic_id": "T_C43_10",
            "label": "自作",
            "category_id": "C43",
            "domain_id": "D06"
          }
        ],
        "narrower": [
          {
            "type": "dynamic_subtopic",
            "id": "DS_T_C43_01_01",
            "label": "初心者DIY"
          },
          {
            "type": "dynamic_subtopic",
            "id": "DS_T_C43_01_02",
            "label": "木工DIY"
          },
          {
            "type": "dynamic_subtopic",
            "id": "DS_T_C43_01_03",
            "label": "家具DIY"
          },
          {
            "type": "dynamic_subtopic",
            "id": "DS_T_C43_01_04",
            "label": "工具の使い方"
          },
          {
            "type": "dynamic_subtopic",
            "id": "DS_T_C43_01_05",
            "label": "リフォームDIY"
          },
          {
            "type": "dynamic_subtopic",
            "id": "DS_T_C43_01_06",
            "label": "DIY収納"
          }
        ],
        "broader": [
          {
            "type": "category",
            "category_id": "C43",
            "label": "DIY・工作",
            "domain_id": "D06"
          },
          {
            "type": "domain",
            "domain_id": "D06",
            "label": "趣味・スポーツ・ものづくり"
          }
        ],
        "surprise": [
          {
            "type": "topic",
            "topic_id": "T_C36_01",
            "label": "住宅",
            "category_id": "C36",
            "domain_id": "D05"
          },
          {
            "type": "topic",
            "topic_id": "T_C48_01",
            "label": "デスク環境",
            "category_id": "C48",
            "domain_id": "D06"
          },
          {
            "type": "topic",
            "topic_id": "T_C43_09",
            "label": "工作",
            "category_id": "C43",
            "domain_id": "D06"
          },
          {
            "type": "topic",
            "topic_id": "T_C44_09",
            "label": "修復",
            "category_id": "C44",
            "domain_id": "D06"
          }
        ]
      }
    },
    {
      "topic_id": "T_C47_01",
      "label": "野球",
      "domain_id": "D06",
      "domain": "趣味・スポーツ・ものづくり",
      "category_id": "C47",
      "category": "スポーツ",
      "actions": {
        "related": [
          {
            "type": "topic",
            "topic_id": "T_C47_10",
            "label": "スポーツ観戦",
            "category_id": "C47",
            "domain_id": "D06"
          },
          {
            "type": "topic",
            "topic_id": "T_C47_09",
            "label": "モータースポーツ",
            "category_id": "C47",
            "domain_id": "D06"
          },
          {
            "type": "topic",
            "topic_id": "T_C47_06",
            "label": "陸上",
            "category_id": "C47",
            "domain_id": "D06"
          },
          {
            "type": "topic",
            "topic_id": "T_C47_02",
            "label": "サッカー",
            "category_id": "C47",
            "domain_id": "D06"
          },
          {
            "type": "topic",
            "topic_id": "T_C47_04",
            "label": "テニス",
            "category_id": "C47",
            "domain_id": "D06"
          }
        ],
        "narrower": [
          {
            "type": "dynamic_subtopic",
            "id": "DS_T_C47_01_01",
            "label": "プロ野球"
          },
          {
            "type": "dynamic_subtopic",
            "id": "DS_T_C47_01_02",
            "label": "高校野球"
          },
          {
            "type": "dynamic_subtopic",
            "id": "DS_T_C47_01_03",
            "label": "メジャーリーグ"
          },
          {
            "type": "dynamic_subtopic",
            "id": "DS_T_C47_01_04",
            "label": "投手"
          },
          {
            "type": "dynamic_subtopic",
            "id": "DS_T_C47_01_05",
            "label": "打撃"
          },
          {
            "type": "dynamic_subtopic",
            "id": "DS_T_C47_01_06",
            "label": "野球戦術"
          }
        ],
        "broader": [
          {
            "type": "category",
            "category_id": "C47",
            "label": "スポーツ",
            "domain_id": "D06"
          },
          {
            "type": "domain",
            "domain_id": "D06",
            "label": "趣味・スポーツ・ものづくり"
          }
        ],
        "surprise": [
          {
            "type": "topic",
            "topic_id": "T_C34_10",
            "label": "スポーツ医学",
            "category_id": "C34",
            "domain_id": "D05"
          },
          {
            "type": "topic",
            "topic_id": "T_C59_01",
            "label": "東京",
            "category_id": "C59",
            "domain_id": "D08"
          },
          {
            "type": "topic",
            "topic_id": "T_C02_11",
            "label": "歴史人物",
            "category_id": "C02",
            "domain_id": "D01"
          },
          {
            "type": "topic",
            "topic_id": "T_C01_07",
            "label": "統計",
            "category_id": "C01",
            "domain_id": "D01"
          }
        ]
      }
    },
    {
      "topic_id": "T_C49_01",
      "label": "J-POP",
      "domain_id": "D07",
      "domain": "エンタメ・文化",
      "category_id": "C49",
      "category": "音楽",
      "actions": {
        "related": [
          {
            "type": "topic",
            "topic_id": "T_C49_02",
            "label": "洋楽",
            "category_id": "C49",
            "domain_id": "D07"
          },
          {
            "type": "topic",
            "topic_id": "T_C49_03",
            "label": "ロック",
            "category_id": "C49",
            "domain_id": "D07"
          },
          {
            "type": "topic",
            "topic_id": "T_C49_06",
            "label": "歌謡曲",
            "category_id": "C49",
            "domain_id": "D07"
          },
          {
            "type": "topic",
            "topic_id": "T_C49_07",
            "label": "ライブ",
            "category_id": "C49",
            "domain_id": "D07"
          },
          {
            "type": "topic",
            "topic_id": "T_C49_10",
            "label": "音楽史",
            "category_id": "C49",
            "domain_id": "D07"
          }
        ],
        "narrower": [
          {
            "type": "dynamic_subtopic",
            "id": "DS_T_C49_01_01",
            "label": "J-POPヒット曲"
          },
          {
            "type": "dynamic_subtopic",
            "id": "DS_T_C49_01_02",
            "label": "J-POPライブ"
          },
          {
            "type": "dynamic_subtopic",
            "id": "DS_T_C49_01_03",
            "label": "J-POP史"
          },
          {
            "type": "dynamic_subtopic",
            "id": "DS_T_C49_01_04",
            "label": "シンガーソングライター"
          },
          {
            "type": "dynamic_subtopic",
            "id": "DS_T_C49_01_05",
            "label": "バンド"
          },
          {
            "type": "dynamic_subtopic",
            "id": "DS_T_C49_01_06",
            "label": "音楽ランキング"
          }
        ],
        "broader": [
          {
            "type": "category",
            "category_id": "C49",
            "label": "音楽",
            "domain_id": "D07"
          },
          {
            "type": "domain",
            "domain_id": "D07",
            "label": "エンタメ・文化"
          }
        ],
        "surprise": [
          {
            "type": "search_seed",
            "label": "平成"
          },
          {
            "type": "search_seed",
            "label": "昭和"
          },
          {
            "type": "topic",
            "topic_id": "T_C53_06",
            "label": "ラジオ",
            "category_id": "C53",
            "domain_id": "D07"
          },
          {
            "type": "topic",
            "topic_id": "T_C49_10",
            "label": "音楽史",
            "category_id": "C49",
            "domain_id": "D07"
          }
        ]
      }
    },
    {
      "topic_id": "T_C50_01",
      "label": "映画",
      "domain_id": "D07",
      "domain": "エンタメ・文化",
      "category_id": "C50",
      "category": "映画・映像",
      "actions": {
        "related": [
          {
            "type": "topic",
            "topic_id": "T_C50_02",
            "label": "邦画",
            "category_id": "C50",
            "domain_id": "D07"
          },
          {
            "type": "topic",
            "topic_id": "T_C50_03",
            "label": "洋画",
            "category_id": "C50",
            "domain_id": "D07"
          },
          {
            "type": "topic",
            "topic_id": "T_C50_04",
            "label": "名作映画",
            "category_id": "C50",
            "domain_id": "D07"
          },
          {
            "type": "topic",
            "topic_id": "T_C50_05",
            "label": "映画史",
            "category_id": "C50",
            "domain_id": "D07"
          },
          {
            "type": "topic",
            "topic_id": "T_C50_07",
            "label": "映画制作",
            "category_id": "C50",
            "domain_id": "D07"
          },
          {
            "type": "topic",
            "topic_id": "T_C50_10",
            "label": "映画解説",
            "category_id": "C50",
            "domain_id": "D07"
          }
        ],
        "narrower": [
          {
            "type": "dynamic_subtopic",
            "id": "DS_T_C50_01_01",
            "label": "映画レビュー"
          },
          {
            "type": "dynamic_subtopic",
            "id": "DS_T_C50_01_02",
            "label": "映画考察"
          },
          {
            "type": "dynamic_subtopic",
            "id": "DS_T_C50_01_03",
            "label": "映画撮影"
          },
          {
            "type": "dynamic_subtopic",
            "id": "DS_T_C50_01_04",
            "label": "脚本"
          },
          {
            "type": "dynamic_subtopic",
            "id": "DS_T_C50_01_05",
            "label": "映画監督"
          },
          {
            "type": "dynamic_subtopic",
            "id": "DS_T_C50_01_06",
            "label": "映画音楽"
          }
        ],
        "broader": [
          {
            "type": "category",
            "category_id": "C50",
            "label": "映画・映像",
            "domain_id": "D07"
          },
          {
            "type": "domain",
            "domain_id": "D07",
            "label": "エンタメ・文化"
          }
        ],
        "surprise": [
          {
            "type": "topic",
            "topic_id": "T_C05_07",
            "label": "文学",
            "category_id": "C05",
            "domain_id": "D01"
          },
          {
            "type": "topic",
            "topic_id": "T_C54_03",
            "label": "美術館",
            "category_id": "C54",
            "domain_id": "D07"
          },
          {
            "type": "topic",
            "topic_id": "T_C32_09",
            "label": "ドキュメンタリー",
            "category_id": "C32",
            "domain_id": "D04"
          },
          {
            "type": "topic",
            "topic_id": "T_C50_06",
            "label": "短編映画",
            "category_id": "C50",
            "domain_id": "D07"
          }
        ]
      }
    },
    {
      "topic_id": "T_C51_01",
      "label": "アニメ",
      "domain_id": "D07",
      "domain": "エンタメ・文化",
      "category_id": "C51",
      "category": "アニメ・漫画",
      "actions": {
        "related": [
          {
            "type": "topic",
            "topic_id": "T_C51_02",
            "label": "漫画",
            "category_id": "C51",
            "domain_id": "D07"
          },
          {
            "type": "topic",
            "topic_id": "T_C51_03",
            "label": "声優",
            "category_id": "C51",
            "domain_id": "D07"
          },
          {
            "type": "topic",
            "topic_id": "T_C51_04",
            "label": "アニメ史",
            "category_id": "C51",
            "domain_id": "D07"
          },
          {
            "type": "topic",
            "topic_id": "T_C51_06",
            "label": "新作アニメ",
            "category_id": "C51",
            "domain_id": "D07"
          },
          {
            "type": "topic",
            "topic_id": "T_C51_07",
            "label": "名作アニメ",
            "category_id": "C51",
            "domain_id": "D07"
          },
          {
            "type": "topic",
            "topic_id": "T_C51_09",
            "label": "作画",
            "category_id": "C51",
            "domain_id": "D07"
          }
        ],
        "narrower": [
          {
            "type": "dynamic_subtopic",
            "id": "DS_T_C51_01_01",
            "label": "アニメ制作"
          },
          {
            "type": "dynamic_subtopic",
            "id": "DS_T_C51_01_02",
            "label": "アニメ考察"
          },
          {
            "type": "dynamic_subtopic",
            "id": "DS_T_C51_01_03",
            "label": "作画技法"
          },
          {
            "type": "dynamic_subtopic",
            "id": "DS_T_C51_01_04",
            "label": "声優"
          },
          {
            "type": "dynamic_subtopic",
            "id": "DS_T_C51_01_05",
            "label": "アニメ音楽"
          },
          {
            "type": "dynamic_subtopic",
            "id": "DS_T_C51_01_06",
            "label": "アニメ史"
          }
        ],
        "broader": [
          {
            "type": "category",
            "category_id": "C51",
            "label": "アニメ・漫画",
            "domain_id": "D07"
          },
          {
            "type": "domain",
            "domain_id": "D07",
            "label": "エンタメ・文化"
          }
        ],
        "surprise": [
          {
            "type": "search_seed",
            "label": "ゲーム"
          },
          {
            "type": "topic",
            "topic_id": "T_C51_02",
            "label": "漫画",
            "category_id": "C51",
            "domain_id": "D07"
          },
          {
            "type": "topic",
            "topic_id": "T_C24_10",
            "label": "デジタルアート",
            "category_id": "C24",
            "domain_id": "D03"
          },
          {
            "type": "search_seed",
            "label": "日本文化"
          }
        ]
      }
    },
    {
      "topic_id": "T_C57_01",
      "label": "北海道",
      "domain_id": "D08",
      "domain": "旅・地域・乗り物",
      "category_id": "C57",
      "category": "国内旅行",
      "actions": {
        "related": [
          {
            "type": "topic",
            "topic_id": "T_C57_02",
            "label": "東北",
            "category_id": "C57",
            "domain_id": "D08"
          },
          {
            "type": "topic",
            "topic_id": "T_C57_03",
            "label": "関東",
            "category_id": "C57",
            "domain_id": "D08"
          },
          {
            "type": "topic",
            "topic_id": "T_C57_06",
            "label": "北陸",
            "category_id": "C57",
            "domain_id": "D08"
          },
          {
            "type": "topic",
            "topic_id": "T_C57_10",
            "label": "九州",
            "category_id": "C57",
            "domain_id": "D08"
          },
          {
            "type": "topic",
            "topic_id": "T_C57_11",
            "label": "沖縄",
            "category_id": "C57",
            "domain_id": "D08"
          }
        ],
        "narrower": [
          {
            "type": "dynamic_subtopic",
            "id": "DS_T_C57_01_01",
            "label": "札幌"
          },
          {
            "type": "dynamic_subtopic",
            "id": "DS_T_C57_01_02",
            "label": "函館"
          },
          {
            "type": "dynamic_subtopic",
            "id": "DS_T_C57_01_03",
            "label": "小樽"
          },
          {
            "type": "dynamic_subtopic",
            "id": "DS_T_C57_01_04",
            "label": "富良野"
          },
          {
            "type": "dynamic_subtopic",
            "id": "DS_T_C57_01_05",
            "label": "知床"
          },
          {
            "type": "dynamic_subtopic",
            "id": "DS_T_C57_01_06",
            "label": "北海道グルメ"
          }
        ],
        "broader": [
          {
            "type": "category",
            "category_id": "C57",
            "label": "国内旅行",
            "domain_id": "D08"
          },
          {
            "type": "domain",
            "domain_id": "D08",
            "label": "旅・地域・乗り物"
          }
        ],
        "surprise": [
          {
            "type": "search_seed",
            "label": "温泉"
          },
          {
            "type": "topic",
            "topic_id": "T_C64_01",
            "label": "鉄道旅",
            "category_id": "C64",
            "domain_id": "D08"
          },
          {
            "type": "search_seed",
            "label": "絶景"
          },
          {
            "type": "topic",
            "topic_id": "T_C64_07",
            "label": "グルメ旅",
            "category_id": "C64",
            "domain_id": "D08"
          }
        ]
      }
    },
    {
      "topic_id": "T_C60_03",
      "label": "ローカル線",
      "domain_id": "D08",
      "domain": "旅・地域・乗り物",
      "category_id": "C60",
      "category": "鉄道",
      "actions": {
        "related": [
          {
            "type": "topic",
            "topic_id": "T_C60_01",
            "label": "新幹線",
            "category_id": "C60",
            "domain_id": "D08"
          },
          {
            "type": "topic",
            "topic_id": "T_C60_02",
            "label": "特急",
            "category_id": "C60",
            "domain_id": "D08"
          },
          {
            "type": "topic",
            "topic_id": "T_C60_04",
            "label": "私鉄",
            "category_id": "C60",
            "domain_id": "D08"
          },
          {
            "type": "topic",
            "topic_id": "T_C60_09",
            "label": "駅",
            "category_id": "C60",
            "domain_id": "D08"
          },
          {
            "type": "topic",
            "topic_id": "T_C60_10",
            "label": "車窓",
            "category_id": "C60",
            "domain_id": "D08"
          },
          {
            "type": "topic",
            "topic_id": "T_C60_11",
            "label": "鉄道史",
            "category_id": "C60",
            "domain_id": "D08"
          }
        ],
        "narrower": [
          {
            "type": "dynamic_subtopic",
            "id": "DS_T_C60_03_01",
            "label": "第三セクター"
          },
          {
            "type": "dynamic_subtopic",
            "id": "DS_T_C60_03_02",
            "label": "地方私鉄"
          },
          {
            "type": "dynamic_subtopic",
            "id": "DS_T_C60_03_03",
            "label": "秘境駅"
          },
          {
            "type": "dynamic_subtopic",
            "id": "DS_T_C60_03_04",
            "label": "廃線"
          },
          {
            "type": "dynamic_subtopic",
            "id": "DS_T_C60_03_05",
            "label": "ローカル線車窓"
          },
          {
            "type": "dynamic_subtopic",
            "id": "DS_T_C60_03_06",
            "label": "ローカル線旅"
          }
        ],
        "broader": [
          {
            "type": "category",
            "category_id": "C60",
            "label": "鉄道",
            "domain_id": "D08"
          },
          {
            "type": "domain",
            "domain_id": "D08",
            "label": "旅・地域・乗り物"
          }
        ],
        "surprise": [
          {
            "type": "search_seed",
            "label": "街歩き"
          },
          {
            "type": "topic",
            "topic_id": "T_C57_01",
            "label": "北海道",
            "category_id": "C57",
            "domain_id": "D08"
          },
          {
            "type": "topic",
            "topic_id": "T_C60_09",
            "label": "駅",
            "category_id": "C60",
            "domain_id": "D08"
          },
          {
            "type": "topic",
            "topic_id": "T_C44_02",
            "label": "鉄道模型",
            "category_id": "C44",
            "domain_id": "D06"
          }
        ]
      }
    },
    {
      "topic_id": "T_C62_01",
      "label": "旅客機",
      "domain_id": "D08",
      "domain": "旅・地域・乗り物",
      "category_id": "C62",
      "category": "航空",
      "actions": {
        "related": [
          {
            "type": "topic",
            "topic_id": "T_C62_02",
            "label": "空港",
            "category_id": "C62",
            "domain_id": "D08"
          },
          {
            "type": "topic",
            "topic_id": "T_C62_03",
            "label": "航空会社",
            "category_id": "C62",
            "domain_id": "D08"
          },
          {
            "type": "topic",
            "topic_id": "T_C62_04",
            "label": "パイロット",
            "category_id": "C62",
            "domain_id": "D08"
          },
          {
            "type": "topic",
            "topic_id": "T_C62_05",
            "label": "航空管制",
            "category_id": "C62",
            "domain_id": "D08"
          },
          {
            "type": "topic",
            "topic_id": "T_C62_07",
            "label": "航空史",
            "category_id": "C62",
            "domain_id": "D08"
          }
        ],
        "narrower": [
          {
            "type": "dynamic_subtopic",
            "id": "DS_T_C62_01_01",
            "label": "旅客機の機種"
          },
          {
            "type": "dynamic_subtopic",
            "id": "DS_T_C62_01_02",
            "label": "機内"
          },
          {
            "type": "dynamic_subtopic",
            "id": "DS_T_C62_01_03",
            "label": "離着陸"
          },
          {
            "type": "dynamic_subtopic",
            "id": "DS_T_C62_01_04",
            "label": "コックピット"
          },
          {
            "type": "dynamic_subtopic",
            "id": "DS_T_C62_01_05",
            "label": "長距離便"
          },
          {
            "type": "dynamic_subtopic",
            "id": "DS_T_C62_01_06",
            "label": "航空路線"
          }
        ],
        "broader": [
          {
            "type": "category",
            "category_id": "C62",
            "label": "航空",
            "domain_id": "D08"
          },
          {
            "type": "domain",
            "domain_id": "D08",
            "label": "旅・地域・乗り物"
          }
        ],
        "surprise": [
          {
            "type": "search_seed",
            "label": "海外旅行"
          },
          {
            "type": "topic",
            "topic_id": "T_C62_09",
            "label": "空港ラウンジ",
            "category_id": "C62",
            "domain_id": "D08"
          },
          {
            "type": "topic",
            "topic_id": "T_C62_06",
            "label": "飛行機撮影",
            "category_id": "C62",
            "domain_id": "D08"
          },
          {
            "type": "topic",
            "topic_id": "T_C29_02",
            "label": "物流",
            "category_id": "C29",
            "domain_id": "D04"
          }
        ]
      }
    }
  ]
};
