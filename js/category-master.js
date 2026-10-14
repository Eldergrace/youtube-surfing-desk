const YOUTUBE_SURFING_CATEGORY_MASTER = {
  "meta": {
    "name": "YouTube Surfing Category Master",
    "version": "1.3",
    "description": "DOMAIN → CATEGORY → TOPIC object master with category-level query_anchor metadata. Ver.1.2 taxonomy and TOPIC IDs retained.",
    "schema": "domain > category[{id,name,query_anchor,query_anchor_status,query_anchor_candidate,topics[{id,label,...}]}]",
    "design_rules": [
      "8 DOMAIN / 64 CATEGORY structure is retained.",
      "Existing TOPIC labels and IDs from Ver.1.2 are retained.",
      "CATEGORY is navigation by default and is not automatically added to the query.",
      "query_anchor is added only when the CATEGORY requires a short term to preserve search intent.",
      "A: query_anchor_status=not_required and query_anchor=null.",
      "B: query_anchor_status=active and query_anchor contains the active anchor.",
      "C: query_anchor_status=topic_review_required, query_anchor=null, and query_anchor_candidate stores a future candidate.",
      "Active anchors should be one or two short terms and must be de-duplicated against BASE QUERY and TOPIC."
    ],
    "counts": {
      "domains": 8,
      "categories": 64,
      "topics": 657,
      "duplicate_labels": 11,
      "duplicate_occurrences": 23
    },
    "query_anchor_rule": {
      "enabled": true,
      "scope": "category",
      "default": null,
      "duplicate_removal": true,
      "activation_policy": "Only B-classified categories are active in Ver.1.3. C-classified categories store candidates only.",
      "assembly_order": [
        "base_query",
        "topic",
        "query_anchor",
        "how",
        "filter",
        "query_cleaner"
      ]
    },
    "query_anchor_counts": {
      "not_required_A": 17,
      "active_B": 8,
      "topic_review_required_C": 39,
      "total_categories": 64
    }
  },
  "domains": [
    {
      "id": "D01",
      "name": "学問・教養",
      "categories": [
        {
          "id": "C01",
          "name": "数学・論理",
          "topics": [
            {
              "id": "T_C01_01",
              "label": "数学"
            },
            {
              "id": "T_C01_02",
              "label": "算数"
            },
            {
              "id": "T_C01_03",
              "label": "代数学"
            },
            {
              "id": "T_C01_04",
              "label": "幾何学"
            },
            {
              "id": "T_C01_05",
              "label": "微分積分"
            },
            {
              "id": "T_C01_06",
              "label": "確率"
            },
            {
              "id": "T_C01_07",
              "label": "統計"
            },
            {
              "id": "T_C01_08",
              "label": "数論"
            },
            {
              "id": "T_C01_09",
              "label": "論理学"
            },
            {
              "id": "T_C01_10",
              "label": "数学パズル"
            },
            {
              "id": "T_C01_11",
              "label": "数学史"
            }
          ],
          "query_anchor": null,
          "query_anchor_status": "not_required",
          "query_anchor_candidate": null
        },
        {
          "id": "C02",
          "name": "歴史",
          "topics": [
            {
              "id": "T_C02_01",
              "label": "日本史"
            },
            {
              "id": "T_C02_02",
              "label": "世界史"
            },
            {
              "id": "T_C02_03",
              "label": "古代史"
            },
            {
              "id": "T_C02_04",
              "label": "中世史"
            },
            {
              "id": "T_C02_05",
              "label": "近代史"
            },
            {
              "id": "T_C02_06",
              "label": "現代史"
            },
            {
              "id": "T_C02_07",
              "label": "戦国時代"
            },
            {
              "id": "T_C02_08",
              "label": "幕末"
            },
            {
              "id": "T_C02_09",
              "label": "戦争史"
            },
            {
              "id": "T_C02_10",
              "label": "文明史"
            },
            {
              "id": "T_C02_11",
              "label": "歴史人物"
            },
            {
              "id": "T_C02_12",
              "label": "考古学"
            }
          ],
          "query_anchor": null,
          "query_anchor_status": "not_required",
          "query_anchor_candidate": null
        },
        {
          "id": "C03",
          "name": "地理",
          "topics": [
            {
              "id": "T_C03_01",
              "label": "日本地理"
            },
            {
              "id": "T_C03_02",
              "label": "世界地理"
            },
            {
              "id": "T_C03_03",
              "label": "地形"
            },
            {
              "id": "T_C03_04",
              "label": "地図"
            },
            {
              "id": "T_C03_05",
              "label": "国境"
            },
            {
              "id": "T_C03_06",
              "label": "都市"
            },
            {
              "id": "T_C03_07",
              "label": "人口"
            },
            {
              "id": "T_C03_08",
              "label": "地域文化"
            },
            {
              "id": "T_C03_09",
              "label": "地政学"
            },
            {
              "id": "T_C03_10",
              "label": "地理雑学"
            }
          ],
          "query_anchor": null,
          "query_anchor_status": "topic_review_required",
          "query_anchor_candidate": "地理"
        },
        {
          "id": "C04",
          "name": "哲学・思想",
          "topics": [
            {
              "id": "T_C04_01",
              "label": "哲学"
            },
            {
              "id": "T_C04_02",
              "label": "倫理学"
            },
            {
              "id": "T_C04_03",
              "label": "東洋思想"
            },
            {
              "id": "T_C04_04",
              "label": "西洋哲学"
            },
            {
              "id": "T_C04_05",
              "label": "宗教思想"
            },
            {
              "id": "T_C04_06",
              "label": "人生論"
            },
            {
              "id": "T_C04_07",
              "label": "科学哲学"
            },
            {
              "id": "T_C04_08",
              "label": "政治思想"
            },
            {
              "id": "T_C04_09",
              "label": "思想史"
            },
            {
              "id": "T_C04_10",
              "label": "哲学者"
            }
          ],
          "query_anchor": null,
          "query_anchor_status": "not_required",
          "query_anchor_candidate": null
        },
        {
          "id": "C05",
          "name": "言語・文学",
          "topics": [
            {
              "id": "T_C05_01",
              "label": "日本語"
            },
            {
              "id": "T_C05_02",
              "label": "英語"
            },
            {
              "id": "T_C05_03",
              "label": "外国語"
            },
            {
              "id": "T_C05_04",
              "label": "言語学"
            },
            {
              "id": "T_C05_05",
              "label": "語源"
            },
            {
              "id": "T_C05_06",
              "label": "漢字"
            },
            {
              "id": "T_C05_07",
              "label": "文学"
            },
            {
              "id": "T_C05_08",
              "label": "日本文学"
            },
            {
              "id": "T_C05_09",
              "label": "海外文学"
            },
            {
              "id": "T_C05_10",
              "label": "小説"
            },
            {
              "id": "T_C05_11",
              "label": "詩"
            },
            {
              "id": "T_C05_12",
              "label": "作家"
            }
          ],
          "query_anchor": null,
          "query_anchor_status": "topic_review_required",
          "query_anchor_candidate": "言語"
        },
        {
          "id": "C06",
          "name": "心理・認知",
          "topics": [
            {
              "id": "T_C06_01",
              "label": "心理学"
            },
            {
              "id": "T_C06_02",
              "label": "認知科学"
            },
            {
              "id": "T_C06_03",
              "label": "記憶"
            },
            {
              "id": "T_C06_04",
              "label": "学習"
            },
            {
              "id": "T_C06_05",
              "label": "意思決定"
            },
            {
              "id": "T_C06_06",
              "label": "感情"
            },
            {
              "id": "T_C06_07",
              "label": "コミュニケーション"
            },
            {
              "id": "T_C06_08",
              "label": "行動心理"
            },
            {
              "id": "T_C06_09",
              "label": "社会心理"
            },
            {
              "id": "T_C06_10",
              "label": "脳と心"
            }
          ],
          "query_anchor": null,
          "query_anchor_status": "topic_review_required",
          "query_anchor_candidate": "心理"
        },
        {
          "id": "C07",
          "name": "教育・学習",
          "topics": [
            {
              "id": "T_C07_01",
              "label": "勉強法"
            },
            {
              "id": "T_C07_02",
              "label": "記憶法"
            },
            {
              "id": "T_C07_03",
              "label": "読書"
            },
            {
              "id": "T_C07_04",
              "label": "受験"
            },
            {
              "id": "T_C07_05",
              "label": "学校教育"
            },
            {
              "id": "T_C07_06",
              "label": "大学"
            },
            {
              "id": "T_C07_07",
              "label": "語学学習"
            },
            {
              "id": "T_C07_08",
              "label": "資格",
              "duplicate": true,
              "context": "learning_qualification"
            },
            {
              "id": "T_C07_09",
              "label": "生涯学習"
            },
            {
              "id": "T_C07_10",
              "label": "教育制度"
            }
          ],
          "query_anchor": null,
          "query_anchor_status": "topic_review_required",
          "query_anchor_candidate": "学習"
        },
        {
          "id": "C08",
          "name": "一般教養・雑学",
          "topics": [
            {
              "id": "T_C08_01",
              "label": "雑学"
            },
            {
              "id": "T_C08_02",
              "label": "豆知識"
            },
            {
              "id": "T_C08_03",
              "label": "常識"
            },
            {
              "id": "T_C08_04",
              "label": "教養"
            },
            {
              "id": "T_C08_05",
              "label": "世界の不思議"
            },
            {
              "id": "T_C08_06",
              "label": "身近な疑問"
            },
            {
              "id": "T_C08_07",
              "label": "言葉の由来"
            },
            {
              "id": "T_C08_08",
              "label": "歴史雑学"
            },
            {
              "id": "T_C08_09",
              "label": "科学雑学"
            },
            {
              "id": "T_C08_10",
              "label": "文化雑学"
            }
          ],
          "query_anchor": "雑学",
          "query_anchor_status": "active",
          "query_anchor_candidate": null
        }
      ]
    },
    {
      "id": "D02",
      "name": "科学・自然",
      "categories": [
        {
          "id": "C09",
          "name": "物理学",
          "topics": [
            {
              "id": "T_C09_01",
              "label": "古典力学"
            },
            {
              "id": "T_C09_02",
              "label": "電磁気学"
            },
            {
              "id": "T_C09_03",
              "label": "熱力学"
            },
            {
              "id": "T_C09_04",
              "label": "流体力学"
            },
            {
              "id": "T_C09_05",
              "label": "量子力学"
            },
            {
              "id": "T_C09_06",
              "label": "相対性理論"
            },
            {
              "id": "T_C09_07",
              "label": "素粒子物理学"
            },
            {
              "id": "T_C09_08",
              "label": "原子核物理学"
            },
            {
              "id": "T_C09_09",
              "label": "物性物理学"
            },
            {
              "id": "T_C09_10",
              "label": "量子場理論"
            },
            {
              "id": "T_C09_11",
              "label": "重力"
            },
            {
              "id": "T_C09_12",
              "label": "超弦理論"
            }
          ],
          "query_anchor": null,
          "query_anchor_status": "not_required",
          "query_anchor_candidate": null
        },
        {
          "id": "C10",
          "name": "化学",
          "topics": [
            {
              "id": "T_C10_01",
              "label": "基礎化学"
            },
            {
              "id": "T_C10_02",
              "label": "有機化学"
            },
            {
              "id": "T_C10_03",
              "label": "無機化学"
            },
            {
              "id": "T_C10_04",
              "label": "物理化学"
            },
            {
              "id": "T_C10_05",
              "label": "分析化学"
            },
            {
              "id": "T_C10_06",
              "label": "元素"
            },
            {
              "id": "T_C10_07",
              "label": "化学反応"
            },
            {
              "id": "T_C10_08",
              "label": "高分子"
            },
            {
              "id": "T_C10_09",
              "label": "材料化学"
            },
            {
              "id": "T_C10_10",
              "label": "日常の化学"
            }
          ],
          "query_anchor": null,
          "query_anchor_status": "not_required",
          "query_anchor_candidate": null
        },
        {
          "id": "C11",
          "name": "生物学",
          "topics": [
            {
              "id": "T_C11_01",
              "label": "細胞"
            },
            {
              "id": "T_C11_02",
              "label": "遺伝"
            },
            {
              "id": "T_C11_03",
              "label": "DNA"
            },
            {
              "id": "T_C11_04",
              "label": "進化"
            },
            {
              "id": "T_C11_05",
              "label": "生態学"
            },
            {
              "id": "T_C11_06",
              "label": "微生物"
            },
            {
              "id": "T_C11_07",
              "label": "植物",
              "duplicate": true,
              "context": "biology_plants"
            },
            {
              "id": "T_C11_08",
              "label": "動物"
            },
            {
              "id": "T_C11_09",
              "label": "人体"
            },
            {
              "id": "T_C11_10",
              "label": "分子生物学"
            },
            {
              "id": "T_C11_11",
              "label": "生命の起源"
            }
          ],
          "query_anchor": null,
          "query_anchor_status": "topic_review_required",
          "query_anchor_candidate": "生物学"
        },
        {
          "id": "C12",
          "name": "地球科学",
          "topics": [
            {
              "id": "T_C12_01",
              "label": "地質学"
            },
            {
              "id": "T_C12_02",
              "label": "地震"
            },
            {
              "id": "T_C12_03",
              "label": "火山"
            },
            {
              "id": "T_C12_04",
              "label": "プレートテクトニクス"
            },
            {
              "id": "T_C12_05",
              "label": "鉱物"
            },
            {
              "id": "T_C12_06",
              "label": "岩石"
            },
            {
              "id": "T_C12_07",
              "label": "地球内部"
            },
            {
              "id": "T_C12_08",
              "label": "地球史"
            },
            {
              "id": "T_C12_09",
              "label": "氷河"
            },
            {
              "id": "T_C12_10",
              "label": "自然災害"
            }
          ],
          "query_anchor": null,
          "query_anchor_status": "topic_review_required",
          "query_anchor_candidate": "地球科学"
        },
        {
          "id": "C13",
          "name": "天文学・宇宙",
          "topics": [
            {
              "id": "T_C13_01",
              "label": "太陽系"
            },
            {
              "id": "T_C13_02",
              "label": "惑星"
            },
            {
              "id": "T_C13_03",
              "label": "恒星"
            },
            {
              "id": "T_C13_04",
              "label": "銀河"
            },
            {
              "id": "T_C13_05",
              "label": "ブラックホール"
            },
            {
              "id": "T_C13_06",
              "label": "宇宙論"
            },
            {
              "id": "T_C13_07",
              "label": "ビッグバン"
            },
            {
              "id": "T_C13_08",
              "label": "系外惑星"
            },
            {
              "id": "T_C13_09",
              "label": "宇宙望遠鏡"
            },
            {
              "id": "T_C13_10",
              "label": "宇宙観測"
            },
            {
              "id": "T_C13_11",
              "label": "宇宙の果て"
            }
          ],
          "query_anchor": null,
          "query_anchor_status": "not_required",
          "query_anchor_candidate": null
        },
        {
          "id": "C14",
          "name": "気象・気候",
          "topics": [
            {
              "id": "T_C14_01",
              "label": "天気"
            },
            {
              "id": "T_C14_02",
              "label": "雲"
            },
            {
              "id": "T_C14_03",
              "label": "台風"
            },
            {
              "id": "T_C14_04",
              "label": "雷"
            },
            {
              "id": "T_C14_05",
              "label": "豪雨"
            },
            {
              "id": "T_C14_06",
              "label": "雪"
            },
            {
              "id": "T_C14_07",
              "label": "気象予報"
            },
            {
              "id": "T_C14_08",
              "label": "気候"
            },
            {
              "id": "T_C14_09",
              "label": "気候変動"
            },
            {
              "id": "T_C14_10",
              "label": "異常気象"
            }
          ],
          "query_anchor": null,
          "query_anchor_status": "topic_review_required",
          "query_anchor_candidate": "気象"
        },
        {
          "id": "C15",
          "name": "海洋・深海",
          "topics": [
            {
              "id": "T_C15_01",
              "label": "海洋"
            },
            {
              "id": "T_C15_02",
              "label": "海流"
            },
            {
              "id": "T_C15_03",
              "label": "深海"
            },
            {
              "id": "T_C15_04",
              "label": "深海生物"
            },
            {
              "id": "T_C15_05",
              "label": "海底"
            },
            {
              "id": "T_C15_06",
              "label": "海溝"
            },
            {
              "id": "T_C15_07",
              "label": "海洋探査"
            },
            {
              "id": "T_C15_08",
              "label": "潜水艇"
            },
            {
              "id": "T_C15_09",
              "label": "珊瑚礁"
            },
            {
              "id": "T_C15_10",
              "label": "海洋環境"
            }
          ],
          "query_anchor": null,
          "query_anchor_status": "topic_review_required",
          "query_anchor_candidate": "海洋"
        },
        {
          "id": "C16",
          "name": "環境・生態",
          "topics": [
            {
              "id": "T_C16_01",
              "label": "生態系"
            },
            {
              "id": "T_C16_02",
              "label": "森林"
            },
            {
              "id": "T_C16_03",
              "label": "自然保護"
            },
            {
              "id": "T_C16_04",
              "label": "絶滅危惧種"
            },
            {
              "id": "T_C16_05",
              "label": "環境問題"
            },
            {
              "id": "T_C16_06",
              "label": "再生可能エネルギー"
            },
            {
              "id": "T_C16_07",
              "label": "汚染"
            },
            {
              "id": "T_C16_08",
              "label": "資源"
            },
            {
              "id": "T_C16_09",
              "label": "循環型社会"
            },
            {
              "id": "T_C16_10",
              "label": "生物多様性"
            }
          ],
          "query_anchor": null,
          "query_anchor_status": "topic_review_required",
          "query_anchor_candidate": "環境"
        }
      ]
    },
    {
      "id": "D03",
      "name": "テクノロジー・デジタル",
      "categories": [
        {
          "id": "C17",
          "name": "AI・機械学習",
          "topics": [
            {
              "id": "T_C17_01",
              "label": "人工知能"
            },
            {
              "id": "T_C17_02",
              "label": "生成AI"
            },
            {
              "id": "T_C17_03",
              "label": "ChatGPT"
            },
            {
              "id": "T_C17_04",
              "label": "LLM"
            },
            {
              "id": "T_C17_05",
              "label": "画像生成AI"
            },
            {
              "id": "T_C17_06",
              "label": "動画生成AI"
            },
            {
              "id": "T_C17_07",
              "label": "AIエージェント"
            },
            {
              "id": "T_C17_08",
              "label": "機械学習"
            },
            {
              "id": "T_C17_09",
              "label": "深層学習"
            },
            {
              "id": "T_C17_10",
              "label": "AI研究"
            },
            {
              "id": "T_C17_11",
              "label": "AI活用"
            },
            {
              "id": "T_C17_12",
              "label": "AI倫理"
            }
          ],
          "query_anchor": null,
          "query_anchor_status": "not_required",
          "query_anchor_candidate": null
        },
        {
          "id": "C18",
          "name": "コンピュータ",
          "topics": [
            {
              "id": "T_C18_01",
              "label": "コンピュータ"
            },
            {
              "id": "T_C18_02",
              "label": "CPU"
            },
            {
              "id": "T_C18_03",
              "label": "GPU"
            },
            {
              "id": "T_C18_04",
              "label": "メモリ"
            },
            {
              "id": "T_C18_05",
              "label": "ストレージ"
            },
            {
              "id": "T_C18_06",
              "label": "OS"
            },
            {
              "id": "T_C18_07",
              "label": "PC"
            },
            {
              "id": "T_C18_08",
              "label": "スーパーコンピュータ"
            },
            {
              "id": "T_C18_09",
              "label": "コンピュータ史"
            },
            {
              "id": "T_C18_10",
              "label": "コンピュータの仕組み"
            }
          ],
          "query_anchor": null,
          "query_anchor_status": "topic_review_required",
          "query_anchor_candidate": "コンピュータ"
        },
        {
          "id": "C19",
          "name": "プログラミング",
          "topics": [
            {
              "id": "T_C19_01",
              "label": "Python"
            },
            {
              "id": "T_C19_02",
              "label": "JavaScript"
            },
            {
              "id": "T_C19_03",
              "label": "HTML"
            },
            {
              "id": "T_C19_04",
              "label": "CSS"
            },
            {
              "id": "T_C19_05",
              "label": "C言語"
            },
            {
              "id": "T_C19_06",
              "label": "Java"
            },
            {
              "id": "T_C19_07",
              "label": "SQL"
            },
            {
              "id": "T_C19_08",
              "label": "アルゴリズム"
            },
            {
              "id": "T_C19_09",
              "label": "Web開発"
            },
            {
              "id": "T_C19_10",
              "label": "アプリ開発"
            },
            {
              "id": "T_C19_11",
              "label": "自動化"
            },
            {
              "id": "T_C19_12",
              "label": "Git"
            }
          ],
          "query_anchor": null,
          "query_anchor_status": "not_required",
          "query_anchor_candidate": null
        },
        {
          "id": "C20",
          "name": "インターネット",
          "topics": [
            {
              "id": "T_C20_01",
              "label": "Web"
            },
            {
              "id": "T_C20_02",
              "label": "インターネット"
            },
            {
              "id": "T_C20_03",
              "label": "検索エンジン"
            },
            {
              "id": "T_C20_04",
              "label": "SNS",
              "duplicate": true,
              "context": "internet_sns"
            },
            {
              "id": "T_C20_05",
              "label": "クラウド"
            },
            {
              "id": "T_C20_06",
              "label": "通信"
            },
            {
              "id": "T_C20_07",
              "label": "ネットワーク"
            },
            {
              "id": "T_C20_08",
              "label": "Webサービス"
            },
            {
              "id": "T_C20_09",
              "label": "インターネット史"
            },
            {
              "id": "T_C20_10",
              "label": "デジタル社会"
            }
          ],
          "query_anchor": null,
          "query_anchor_status": "topic_review_required",
          "query_anchor_candidate": "インターネット"
        },
        {
          "id": "C21",
          "name": "半導体・電子技術",
          "topics": [
            {
              "id": "T_C21_01",
              "label": "半導体"
            },
            {
              "id": "T_C21_02",
              "label": "トランジスタ"
            },
            {
              "id": "T_C21_03",
              "label": "集積回路"
            },
            {
              "id": "T_C21_04",
              "label": "CPU製造"
            },
            {
              "id": "T_C21_05",
              "label": "半導体工場"
            },
            {
              "id": "T_C21_06",
              "label": "電子回路"
            },
            {
              "id": "T_C21_07",
              "label": "センサー"
            },
            {
              "id": "T_C21_08",
              "label": "ディスプレイ"
            },
            {
              "id": "T_C21_09",
              "label": "バッテリー"
            },
            {
              "id": "T_C21_10",
              "label": "電子部品"
            }
          ],
          "query_anchor": null,
          "query_anchor_status": "topic_review_required",
          "query_anchor_candidate": "半導体"
        },
        {
          "id": "C22",
          "name": "ロボット・自動化",
          "topics": [
            {
              "id": "T_C22_01",
              "label": "ロボット"
            },
            {
              "id": "T_C22_02",
              "label": "産業ロボット"
            },
            {
              "id": "T_C22_03",
              "label": "ヒューマノイド"
            },
            {
              "id": "T_C22_04",
              "label": "ドローン"
            },
            {
              "id": "T_C22_05",
              "label": "自動運転"
            },
            {
              "id": "T_C22_06",
              "label": "工場自動化"
            },
            {
              "id": "T_C22_07",
              "label": "物流ロボット"
            },
            {
              "id": "T_C22_08",
              "label": "家庭用ロボット"
            },
            {
              "id": "T_C22_09",
              "label": "ロボット研究"
            }
          ],
          "query_anchor": null,
          "query_anchor_status": "not_required",
          "query_anchor_candidate": null
        },
        {
          "id": "C23",
          "name": "セキュリティ",
          "topics": [
            {
              "id": "T_C23_01",
              "label": "サイバーセキュリティ"
            },
            {
              "id": "T_C23_02",
              "label": "暗号"
            },
            {
              "id": "T_C23_03",
              "label": "パスワード"
            },
            {
              "id": "T_C23_04",
              "label": "ハッキング"
            },
            {
              "id": "T_C23_05",
              "label": "マルウェア"
            },
            {
              "id": "T_C23_06",
              "label": "詐欺"
            },
            {
              "id": "T_C23_07",
              "label": "プライバシー"
            },
            {
              "id": "T_C23_08",
              "label": "ネット犯罪"
            },
            {
              "id": "T_C23_09",
              "label": "情報セキュリティ"
            }
          ],
          "query_anchor": "セキュリティ",
          "query_anchor_status": "active",
          "query_anchor_candidate": null
        },
        {
          "id": "C24",
          "name": "デジタル制作",
          "topics": [
            {
              "id": "T_C24_01",
              "label": "画像編集"
            },
            {
              "id": "T_C24_02",
              "label": "動画編集"
            },
            {
              "id": "T_C24_03",
              "label": "写真加工"
            },
            {
              "id": "T_C24_04",
              "label": "3DCG"
            },
            {
              "id": "T_C24_05",
              "label": "生成AI制作"
            },
            {
              "id": "T_C24_06",
              "label": "Webデザイン"
            },
            {
              "id": "T_C24_07",
              "label": "UIデザイン"
            },
            {
              "id": "T_C24_08",
              "label": "グラフィックデザイン"
            },
            {
              "id": "T_C24_09",
              "label": "音声編集"
            },
            {
              "id": "T_C24_10",
              "label": "デジタルアート"
            }
          ],
          "query_anchor": null,
          "query_anchor_status": "topic_review_required",
          "query_anchor_candidate": "デジタル制作"
        }
      ]
    },
    {
      "id": "D04",
      "name": "社会・経済・仕事",
      "categories": [
        {
          "id": "C25",
          "name": "経済",
          "topics": [
            {
              "id": "T_C25_01",
              "label": "経済"
            },
            {
              "id": "T_C25_02",
              "label": "景気"
            },
            {
              "id": "T_C25_03",
              "label": "物価"
            },
            {
              "id": "T_C25_04",
              "label": "インフレ"
            },
            {
              "id": "T_C25_05",
              "label": "デフレ"
            },
            {
              "id": "T_C25_06",
              "label": "GDP"
            },
            {
              "id": "T_C25_07",
              "label": "金利",
              "duplicate": true,
              "context": "economy_interest_rate"
            },
            {
              "id": "T_C25_08",
              "label": "為替",
              "duplicate": true,
              "context": "economy_exchange"
            },
            {
              "id": "T_C25_09",
              "label": "貿易"
            },
            {
              "id": "T_C25_10",
              "label": "世界経済"
            },
            {
              "id": "T_C25_11",
              "label": "日本経済"
            },
            {
              "id": "T_C25_12",
              "label": "経済史"
            }
          ],
          "query_anchor": null,
          "query_anchor_status": "topic_review_required",
          "query_anchor_candidate": "経済"
        },
        {
          "id": "C26",
          "name": "金融・投資",
          "topics": [
            {
              "id": "T_C26_01",
              "label": "株式"
            },
            {
              "id": "T_C26_02",
              "label": "債券"
            },
            {
              "id": "T_C26_03",
              "label": "為替",
              "duplicate": true,
              "context": "finance_exchange"
            },
            {
              "id": "T_C26_04",
              "label": "金利",
              "duplicate": true,
              "context": "finance_interest_rate"
            },
            {
              "id": "T_C26_05",
              "label": "投資信託"
            },
            {
              "id": "T_C26_06",
              "label": "ETF"
            },
            {
              "id": "T_C26_07",
              "label": "銀行"
            },
            {
              "id": "T_C26_08",
              "label": "中央銀行"
            },
            {
              "id": "T_C26_09",
              "label": "金融市場"
            },
            {
              "id": "T_C26_10",
              "label": "企業分析"
            },
            {
              "id": "T_C26_11",
              "label": "資産運用"
            },
            {
              "id": "T_C26_12",
              "label": "金融史"
            }
          ],
          "query_anchor": null,
          "query_anchor_status": "topic_review_required",
          "query_anchor_candidate": "投資"
        },
        {
          "id": "C27",
          "name": "ビジネス・企業",
          "topics": [
            {
              "id": "T_C27_01",
              "label": "企業"
            },
            {
              "id": "T_C27_02",
              "label": "経営"
            },
            {
              "id": "T_C27_03",
              "label": "起業"
            },
            {
              "id": "T_C27_04",
              "label": "経営戦略"
            },
            {
              "id": "T_C27_05",
              "label": "マーケティング"
            },
            {
              "id": "T_C27_06",
              "label": "営業"
            },
            {
              "id": "T_C27_07",
              "label": "企業史"
            },
            {
              "id": "T_C27_08",
              "label": "ブランド"
            },
            {
              "id": "T_C27_09",
              "label": "小売",
              "duplicate": true,
              "context": "business_retail"
            },
            {
              "id": "T_C27_10",
              "label": "スタートアップ"
            },
            {
              "id": "T_C27_11",
              "label": "経営者"
            }
          ],
          "query_anchor": null,
          "query_anchor_status": "topic_review_required",
          "query_anchor_candidate": "ビジネス"
        },
        {
          "id": "C28",
          "name": "仕事・キャリア",
          "topics": [
            {
              "id": "T_C28_01",
              "label": "職業"
            },
            {
              "id": "T_C28_02",
              "label": "転職"
            },
            {
              "id": "T_C28_03",
              "label": "就職"
            },
            {
              "id": "T_C28_04",
              "label": "働き方"
            },
            {
              "id": "T_C28_05",
              "label": "仕事術"
            },
            {
              "id": "T_C28_06",
              "label": "リモートワーク"
            },
            {
              "id": "T_C28_07",
              "label": "キャリア"
            },
            {
              "id": "T_C28_08",
              "label": "資格",
              "duplicate": true,
              "context": "career_qualification"
            },
            {
              "id": "T_C28_09",
              "label": "職場"
            },
            {
              "id": "T_C28_10",
              "label": "生産性"
            },
            {
              "id": "T_C28_11",
              "label": "業務改善"
            }
          ],
          "query_anchor": null,
          "query_anchor_status": "topic_review_required",
          "query_anchor_candidate": "仕事"
        },
        {
          "id": "C29",
          "name": "産業・物流",
          "topics": [
            {
              "id": "T_C29_01",
              "label": "製造業"
            },
            {
              "id": "T_C29_02",
              "label": "物流"
            },
            {
              "id": "T_C29_03",
              "label": "運輸"
            },
            {
              "id": "T_C29_04",
              "label": "建設"
            },
            {
              "id": "T_C29_05",
              "label": "農業"
            },
            {
              "id": "T_C29_06",
              "label": "漁業"
            },
            {
              "id": "T_C29_07",
              "label": "エネルギー"
            },
            {
              "id": "T_C29_08",
              "label": "小売",
              "duplicate": true,
              "context": "industry_retail"
            },
            {
              "id": "T_C29_09",
              "label": "倉庫"
            },
            {
              "id": "T_C29_10",
              "label": "サプライチェーン"
            },
            {
              "id": "T_C29_11",
              "label": "工場"
            }
          ],
          "query_anchor": null,
          "query_anchor_status": "topic_review_required",
          "query_anchor_candidate": "産業"
        },
        {
          "id": "C30",
          "name": "法律・制度",
          "topics": [
            {
              "id": "T_C30_01",
              "label": "法律"
            },
            {
              "id": "T_C30_02",
              "label": "裁判"
            },
            {
              "id": "T_C30_03",
              "label": "憲法"
            },
            {
              "id": "T_C30_04",
              "label": "民法"
            },
            {
              "id": "T_C30_05",
              "label": "刑法"
            },
            {
              "id": "T_C30_06",
              "label": "行政",
              "duplicate": true,
              "context": "legal_system_administration"
            },
            {
              "id": "T_C30_07",
              "label": "税制度"
            },
            {
              "id": "T_C30_08",
              "label": "社会保障"
            },
            {
              "id": "T_C30_09",
              "label": "制度解説"
            },
            {
              "id": "T_C30_10",
              "label": "消費者問題"
            }
          ],
          "query_anchor": null,
          "query_anchor_status": "topic_review_required",
          "query_anchor_candidate": "制度"
        },
        {
          "id": "C31",
          "name": "政治・行政",
          "topics": [
            {
              "id": "T_C31_01",
              "label": "政治制度"
            },
            {
              "id": "T_C31_02",
              "label": "国会"
            },
            {
              "id": "T_C31_03",
              "label": "行政",
              "duplicate": true,
              "context": "politics_administration"
            },
            {
              "id": "T_C31_04",
              "label": "地方自治"
            },
            {
              "id": "T_C31_05",
              "label": "外交"
            },
            {
              "id": "T_C31_06",
              "label": "国際関係"
            },
            {
              "id": "T_C31_07",
              "label": "選挙制度"
            },
            {
              "id": "T_C31_08",
              "label": "政策"
            },
            {
              "id": "T_C31_09",
              "label": "公共政策"
            },
            {
              "id": "T_C31_10",
              "label": "政治史"
            }
          ],
          "query_anchor": null,
          "query_anchor_status": "topic_review_required",
          "query_anchor_candidate": "政治"
        },
        {
          "id": "C32",
          "name": "メディア・報道",
          "topics": [
            {
              "id": "T_C32_01",
              "label": "新聞"
            },
            {
              "id": "T_C32_02",
              "label": "テレビ"
            },
            {
              "id": "T_C32_03",
              "label": "ニュース"
            },
            {
              "id": "T_C32_04",
              "label": "ジャーナリズム"
            },
            {
              "id": "T_C32_05",
              "label": "報道"
            },
            {
              "id": "T_C32_06",
              "label": "広告"
            },
            {
              "id": "T_C32_07",
              "label": "SNS",
              "duplicate": true,
              "context": "media_sns"
            },
            {
              "id": "T_C32_08",
              "label": "メディア史"
            },
            {
              "id": "T_C32_09",
              "label": "ドキュメンタリー"
            },
            {
              "id": "T_C32_10",
              "label": "情報リテラシー"
            }
          ],
          "query_anchor": null,
          "query_anchor_status": "topic_review_required",
          "query_anchor_candidate": "メディア"
        }
      ]
    },
    {
      "id": "D05",
      "name": "暮らし・健康",
      "categories": [
        {
          "id": "C33",
          "name": "健康・医療",
          "topics": [
            {
              "id": "T_C33_01",
              "label": "健康"
            },
            {
              "id": "T_C33_02",
              "label": "病気"
            },
            {
              "id": "T_C33_03",
              "label": "予防"
            },
            {
              "id": "T_C33_04",
              "label": "医療"
            },
            {
              "id": "T_C33_05",
              "label": "健康診断"
            },
            {
              "id": "T_C33_06",
              "label": "薬"
            },
            {
              "id": "T_C33_07",
              "label": "病院"
            },
            {
              "id": "T_C33_08",
              "label": "医師"
            },
            {
              "id": "T_C33_09",
              "label": "高齢者医療"
            },
            {
              "id": "T_C33_10",
              "label": "生活習慣"
            },
            {
              "id": "T_C33_11",
              "label": "医学"
            }
          ],
          "query_anchor": null,
          "query_anchor_status": "topic_review_required",
          "query_anchor_candidate": "健康"
        },
        {
          "id": "C34",
          "name": "運動・フィットネス",
          "topics": [
            {
              "id": "T_C34_01",
              "label": "ウォーキング"
            },
            {
              "id": "T_C34_02",
              "label": "筋トレ"
            },
            {
              "id": "T_C34_03",
              "label": "ストレッチ"
            },
            {
              "id": "T_C34_04",
              "label": "ヨガ"
            },
            {
              "id": "T_C34_05",
              "label": "体操"
            },
            {
              "id": "T_C34_06",
              "label": "ランニング"
            },
            {
              "id": "T_C34_07",
              "label": "姿勢"
            },
            {
              "id": "T_C34_08",
              "label": "体力づくり"
            },
            {
              "id": "T_C34_09",
              "label": "高齢者運動"
            },
            {
              "id": "T_C34_10",
              "label": "スポーツ医学"
            }
          ],
          "query_anchor": null,
          "query_anchor_status": "not_required",
          "query_anchor_candidate": null
        },
        {
          "id": "C35",
          "name": "食・料理",
          "topics": [
            {
              "id": "T_C35_01",
              "label": "家庭料理"
            },
            {
              "id": "T_C35_02",
              "label": "和食"
            },
            {
              "id": "T_C35_03",
              "label": "洋食"
            },
            {
              "id": "T_C35_04",
              "label": "中華"
            },
            {
              "id": "T_C35_05",
              "label": "パン"
            },
            {
              "id": "T_C35_06",
              "label": "スイーツ"
            },
            {
              "id": "T_C35_07",
              "label": "料理技術"
            },
            {
              "id": "T_C35_08",
              "label": "レシピ"
            },
            {
              "id": "T_C35_09",
              "label": "食品"
            },
            {
              "id": "T_C35_10",
              "label": "食文化"
            },
            {
              "id": "T_C35_11",
              "label": "コーヒー"
            },
            {
              "id": "T_C35_12",
              "label": "お茶"
            }
          ],
          "query_anchor": null,
          "query_anchor_status": "topic_review_required",
          "query_anchor_candidate": "料理"
        },
        {
          "id": "C36",
          "name": "住宅・住まい",
          "topics": [
            {
              "id": "T_C36_01",
              "label": "住宅"
            },
            {
              "id": "T_C36_02",
              "label": "注文住宅"
            },
            {
              "id": "T_C36_03",
              "label": "マンション"
            },
            {
              "id": "T_C36_04",
              "label": "リフォーム"
            },
            {
              "id": "T_C36_05",
              "label": "建築",
              "duplicate": true,
              "context": "housing_architecture"
            },
            {
              "id": "T_C36_06",
              "label": "断熱"
            },
            {
              "id": "T_C36_07",
              "label": "インテリア"
            },
            {
              "id": "T_C36_08",
              "label": "家具"
            },
            {
              "id": "T_C36_09",
              "label": "収納",
              "duplicate": true,
              "context": "housing_storage"
            },
            {
              "id": "T_C36_10",
              "label": "防犯"
            },
            {
              "id": "T_C36_11",
              "label": "スマートホーム"
            }
          ],
          "query_anchor": null,
          "query_anchor_status": "topic_review_required",
          "query_anchor_candidate": "住まい"
        },
        {
          "id": "C37",
          "name": "家事・生活術",
          "topics": [
            {
              "id": "T_C37_01",
              "label": "掃除"
            },
            {
              "id": "T_C37_02",
              "label": "洗濯"
            },
            {
              "id": "T_C37_03",
              "label": "収納",
              "duplicate": true,
              "context": "housekeeping_storage"
            },
            {
              "id": "T_C37_04",
              "label": "片付け"
            },
            {
              "id": "T_C37_05",
              "label": "節約",
              "duplicate": true,
              "context": "housekeeping_saving"
            },
            {
              "id": "T_C37_06",
              "label": "時短"
            },
            {
              "id": "T_C37_07",
              "label": "生活用品"
            },
            {
              "id": "T_C37_08",
              "label": "家事"
            },
            {
              "id": "T_C37_09",
              "label": "整理整頓"
            },
            {
              "id": "T_C37_10",
              "label": "生活の知恵"
            }
          ],
          "query_anchor": null,
          "query_anchor_status": "topic_review_required",
          "query_anchor_candidate": "生活術"
        },
        {
          "id": "C38",
          "name": "家計・生活設計",
          "topics": [
            {
              "id": "T_C38_01",
              "label": "家計"
            },
            {
              "id": "T_C38_02",
              "label": "節約",
              "duplicate": true,
              "context": "household_finance_saving"
            },
            {
              "id": "T_C38_03",
              "label": "年金"
            },
            {
              "id": "T_C38_04",
              "label": "保険"
            },
            {
              "id": "T_C38_05",
              "label": "税金"
            },
            {
              "id": "T_C38_06",
              "label": "住宅費"
            },
            {
              "id": "T_C38_07",
              "label": "老後資金"
            },
            {
              "id": "T_C38_08",
              "label": "生活費"
            },
            {
              "id": "T_C38_09",
              "label": "家計管理"
            },
            {
              "id": "T_C38_10",
              "label": "ライフプラン"
            }
          ],
          "query_anchor": "家計",
          "query_anchor_status": "active",
          "query_anchor_candidate": null
        },
        {
          "id": "C39",
          "name": "家族・子育て",
          "topics": [
            {
              "id": "T_C39_01",
              "label": "子育て"
            },
            {
              "id": "T_C39_02",
              "label": "教育"
            },
            {
              "id": "T_C39_03",
              "label": "家族"
            },
            {
              "id": "T_C39_04",
              "label": "育児"
            },
            {
              "id": "T_C39_05",
              "label": "学校"
            },
            {
              "id": "T_C39_06",
              "label": "親子"
            },
            {
              "id": "T_C39_07",
              "label": "家族生活"
            },
            {
              "id": "T_C39_08",
              "label": "子どもの成長"
            },
            {
              "id": "T_C39_09",
              "label": "家庭教育"
            }
          ],
          "query_anchor": null,
          "query_anchor_status": "topic_review_required",
          "query_anchor_candidate": "子育て"
        },
        {
          "id": "C40",
          "name": "介護・福祉",
          "topics": [
            {
              "id": "T_C40_01",
              "label": "介護"
            },
            {
              "id": "T_C40_02",
              "label": "高齢者"
            },
            {
              "id": "T_C40_03",
              "label": "認知症"
            },
            {
              "id": "T_C40_04",
              "label": "フレイル"
            },
            {
              "id": "T_C40_05",
              "label": "福祉"
            },
            {
              "id": "T_C40_06",
              "label": "介護保険"
            },
            {
              "id": "T_C40_07",
              "label": "在宅介護"
            },
            {
              "id": "T_C40_08",
              "label": "福祉用具"
            },
            {
              "id": "T_C40_09",
              "label": "高齢者生活"
            },
            {
              "id": "T_C40_10",
              "label": "地域福祉"
            }
          ],
          "query_anchor": null,
          "query_anchor_status": "topic_review_required",
          "query_anchor_candidate": "介護"
        }
      ]
    },
    {
      "id": "D06",
      "name": "趣味・スポーツ・ものづくり",
      "categories": [
        {
          "id": "C41",
          "name": "カメラ・写真",
          "topics": [
            {
              "id": "T_C41_01",
              "label": "カメラ"
            },
            {
              "id": "T_C41_02",
              "label": "写真"
            },
            {
              "id": "T_C41_03",
              "label": "レンズ"
            },
            {
              "id": "T_C41_04",
              "label": "撮影"
            },
            {
              "id": "T_C41_05",
              "label": "構図"
            },
            {
              "id": "T_C41_06",
              "label": "風景写真"
            },
            {
              "id": "T_C41_07",
              "label": "人物写真"
            },
            {
              "id": "T_C41_08",
              "label": "野鳥撮影"
            },
            {
              "id": "T_C41_09",
              "label": "天体写真"
            },
            {
              "id": "T_C41_10",
              "label": "フィルムカメラ"
            },
            {
              "id": "T_C41_11",
              "label": "写真編集"
            }
          ],
          "query_anchor": null,
          "query_anchor_status": "topic_review_required",
          "query_anchor_candidate": "写真"
        },
        {
          "id": "C42",
          "name": "オーディオ・音響",
          "topics": [
            {
              "id": "T_C42_01",
              "label": "オーディオ"
            },
            {
              "id": "T_C42_02",
              "label": "スピーカー"
            },
            {
              "id": "T_C42_03",
              "label": "ヘッドホン"
            },
            {
              "id": "T_C42_04",
              "label": "イヤホン"
            },
            {
              "id": "T_C42_05",
              "label": "アンプ"
            },
            {
              "id": "T_C42_06",
              "label": "レコード"
            },
            {
              "id": "T_C42_07",
              "label": "CD"
            },
            {
              "id": "T_C42_08",
              "label": "ハイレゾ"
            },
            {
              "id": "T_C42_09",
              "label": "音響"
            },
            {
              "id": "T_C42_10",
              "label": "ホームオーディオ"
            }
          ],
          "query_anchor": null,
          "query_anchor_status": "not_required",
          "query_anchor_candidate": null
        },
        {
          "id": "C43",
          "name": "DIY・工作",
          "topics": [
            {
              "id": "T_C43_01",
              "label": "DIY"
            },
            {
              "id": "T_C43_02",
              "label": "木工"
            },
            {
              "id": "T_C43_03",
              "label": "工具"
            },
            {
              "id": "T_C43_04",
              "label": "電子工作"
            },
            {
              "id": "T_C43_05",
              "label": "修理"
            },
            {
              "id": "T_C43_06",
              "label": "家具製作"
            },
            {
              "id": "T_C43_07",
              "label": "改造"
            },
            {
              "id": "T_C43_08",
              "label": "溶接"
            },
            {
              "id": "T_C43_09",
              "label": "工作"
            },
            {
              "id": "T_C43_10",
              "label": "自作"
            }
          ],
          "query_anchor": null,
          "query_anchor_status": "topic_review_required",
          "query_anchor_candidate": "DIY"
        },
        {
          "id": "C44",
          "name": "模型・コレクション",
          "topics": [
            {
              "id": "T_C44_01",
              "label": "プラモデル"
            },
            {
              "id": "T_C44_02",
              "label": "鉄道模型"
            },
            {
              "id": "T_C44_03",
              "label": "ミニカー"
            },
            {
              "id": "T_C44_04",
              "label": "模型"
            },
            {
              "id": "T_C44_05",
              "label": "フィギュア"
            },
            {
              "id": "T_C44_06",
              "label": "ジオラマ"
            },
            {
              "id": "T_C44_07",
              "label": "コレクション"
            },
            {
              "id": "T_C44_08",
              "label": "レトロ玩具"
            },
            {
              "id": "T_C44_09",
              "label": "修復"
            }
          ],
          "query_anchor": null,
          "query_anchor_status": "topic_review_required",
          "query_anchor_candidate": "模型"
        },
        {
          "id": "C45",
          "name": "園芸・自然趣味",
          "topics": [
            {
              "id": "T_C45_01",
              "label": "園芸"
            },
            {
              "id": "T_C45_02",
              "label": "家庭菜園"
            },
            {
              "id": "T_C45_03",
              "label": "植物",
              "duplicate": true,
              "context": "gardening_plants"
            },
            {
              "id": "T_C45_04",
              "label": "盆栽"
            },
            {
              "id": "T_C45_05",
              "label": "花"
            },
            {
              "id": "T_C45_06",
              "label": "庭づくり"
            },
            {
              "id": "T_C45_07",
              "label": "観葉植物"
            },
            {
              "id": "T_C45_08",
              "label": "野鳥観察"
            },
            {
              "id": "T_C45_09",
              "label": "昆虫観察"
            },
            {
              "id": "T_C45_10",
              "label": "自然観察"
            }
          ],
          "query_anchor": null,
          "query_anchor_status": "topic_review_required",
          "query_anchor_candidate": "園芸"
        },
        {
          "id": "C46",
          "name": "アウトドア",
          "topics": [
            {
              "id": "T_C46_01",
              "label": "キャンプ"
            },
            {
              "id": "T_C46_02",
              "label": "登山"
            },
            {
              "id": "T_C46_03",
              "label": "ハイキング"
            },
            {
              "id": "T_C46_04",
              "label": "釣り"
            },
            {
              "id": "T_C46_05",
              "label": "車中泊"
            },
            {
              "id": "T_C46_06",
              "label": "焚き火"
            },
            {
              "id": "T_C46_07",
              "label": "サイクリング"
            },
            {
              "id": "T_C46_08",
              "label": "野外料理"
            },
            {
              "id": "T_C46_09",
              "label": "アウトドア用品"
            }
          ],
          "query_anchor": null,
          "query_anchor_status": "topic_review_required",
          "query_anchor_candidate": "アウトドア"
        },
        {
          "id": "C47",
          "name": "スポーツ",
          "topics": [
            {
              "id": "T_C47_01",
              "label": "野球"
            },
            {
              "id": "T_C47_02",
              "label": "サッカー"
            },
            {
              "id": "T_C47_03",
              "label": "バスケットボール"
            },
            {
              "id": "T_C47_04",
              "label": "テニス"
            },
            {
              "id": "T_C47_05",
              "label": "ゴルフ"
            },
            {
              "id": "T_C47_06",
              "label": "陸上"
            },
            {
              "id": "T_C47_07",
              "label": "水泳"
            },
            {
              "id": "T_C47_08",
              "label": "格闘技"
            },
            {
              "id": "T_C47_09",
              "label": "モータースポーツ",
              "duplicate": true,
              "context": "sport_motorsport"
            },
            {
              "id": "T_C47_10",
              "label": "スポーツ観戦"
            }
          ],
          "query_anchor": null,
          "query_anchor_status": "not_required",
          "query_anchor_candidate": null
        },
        {
          "id": "C48",
          "name": "デスク・ガジェット趣味",
          "topics": [
            {
              "id": "T_C48_01",
              "label": "デスク環境"
            },
            {
              "id": "T_C48_02",
              "label": "デスクチェア"
            },
            {
              "id": "T_C48_03",
              "label": "キーボード"
            },
            {
              "id": "T_C48_04",
              "label": "マウス"
            },
            {
              "id": "T_C48_05",
              "label": "モニター"
            },
            {
              "id": "T_C48_06",
              "label": "PCデスク"
            },
            {
              "id": "T_C48_07",
              "label": "文房具"
            },
            {
              "id": "T_C48_08",
              "label": "ガジェット"
            },
            {
              "id": "T_C48_09",
              "label": "作業環境"
            },
            {
              "id": "T_C48_10",
              "label": "収納",
              "duplicate": true,
              "context": "desk_storage"
            }
          ],
          "query_anchor": "デスク",
          "query_anchor_status": "active",
          "query_anchor_candidate": null
        }
      ]
    },
    {
      "id": "D07",
      "name": "エンタメ・文化",
      "categories": [
        {
          "id": "C49",
          "name": "音楽",
          "topics": [
            {
              "id": "T_C49_01",
              "label": "J-POP"
            },
            {
              "id": "T_C49_02",
              "label": "洋楽"
            },
            {
              "id": "T_C49_03",
              "label": "ロック"
            },
            {
              "id": "T_C49_04",
              "label": "ジャズ"
            },
            {
              "id": "T_C49_05",
              "label": "クラシック"
            },
            {
              "id": "T_C49_06",
              "label": "歌謡曲"
            },
            {
              "id": "T_C49_07",
              "label": "ライブ"
            },
            {
              "id": "T_C49_08",
              "label": "演奏"
            },
            {
              "id": "T_C49_09",
              "label": "作曲"
            },
            {
              "id": "T_C49_10",
              "label": "音楽史"
            }
          ],
          "query_anchor": null,
          "query_anchor_status": "not_required",
          "query_anchor_candidate": null
        },
        {
          "id": "C50",
          "name": "映画・映像",
          "topics": [
            {
              "id": "T_C50_01",
              "label": "映画"
            },
            {
              "id": "T_C50_02",
              "label": "邦画"
            },
            {
              "id": "T_C50_03",
              "label": "洋画"
            },
            {
              "id": "T_C50_04",
              "label": "名作映画"
            },
            {
              "id": "T_C50_05",
              "label": "映画史"
            },
            {
              "id": "T_C50_06",
              "label": "短編映画"
            },
            {
              "id": "T_C50_07",
              "label": "映画制作"
            },
            {
              "id": "T_C50_08",
              "label": "映像作品"
            },
            {
              "id": "T_C50_09",
              "label": "予告編"
            },
            {
              "id": "T_C50_10",
              "label": "映画解説"
            }
          ],
          "query_anchor": null,
          "query_anchor_status": "topic_review_required",
          "query_anchor_candidate": "映画"
        },
        {
          "id": "C51",
          "name": "アニメ・漫画",
          "topics": [
            {
              "id": "T_C51_01",
              "label": "アニメ"
            },
            {
              "id": "T_C51_02",
              "label": "漫画"
            },
            {
              "id": "T_C51_03",
              "label": "声優"
            },
            {
              "id": "T_C51_04",
              "label": "アニメ史"
            },
            {
              "id": "T_C51_05",
              "label": "漫画史"
            },
            {
              "id": "T_C51_06",
              "label": "新作アニメ"
            },
            {
              "id": "T_C51_07",
              "label": "名作アニメ"
            },
            {
              "id": "T_C51_08",
              "label": "制作現場"
            },
            {
              "id": "T_C51_09",
              "label": "作画"
            }
          ],
          "query_anchor": null,
          "query_anchor_status": "not_required",
          "query_anchor_candidate": null
        },
        {
          "id": "C52",
          "name": "ゲーム",
          "topics": [
            {
              "id": "T_C52_01",
              "label": "テレビゲーム"
            },
            {
              "id": "T_C52_02",
              "label": "PCゲーム"
            },
            {
              "id": "T_C52_03",
              "label": "スマホゲーム"
            },
            {
              "id": "T_C52_04",
              "label": "レトロゲーム"
            },
            {
              "id": "T_C52_05",
              "label": "ゲーム実況"
            },
            {
              "id": "T_C52_06",
              "label": "攻略"
            },
            {
              "id": "T_C52_07",
              "label": "RTA"
            },
            {
              "id": "T_C52_08",
              "label": "ゲーム史"
            },
            {
              "id": "T_C52_09",
              "label": "ゲーム開発"
            },
            {
              "id": "T_C52_10",
              "label": "eスポーツ"
            }
          ],
          "query_anchor": null,
          "query_anchor_status": "not_required",
          "query_anchor_candidate": null
        },
        {
          "id": "C53",
          "name": "お笑い・トーク",
          "topics": [
            {
              "id": "T_C53_01",
              "label": "漫才"
            },
            {
              "id": "T_C53_02",
              "label": "コント"
            },
            {
              "id": "T_C53_03",
              "label": "お笑い"
            },
            {
              "id": "T_C53_04",
              "label": "トーク"
            },
            {
              "id": "T_C53_05",
              "label": "バラエティ"
            },
            {
              "id": "T_C53_06",
              "label": "ラジオ"
            },
            {
              "id": "T_C53_07",
              "label": "落語"
            },
            {
              "id": "T_C53_08",
              "label": "ものまね"
            },
            {
              "id": "T_C53_09",
              "label": "コメディ"
            }
          ],
          "query_anchor": null,
          "query_anchor_status": "topic_review_required",
          "query_anchor_candidate": "お笑い"
        },
        {
          "id": "C54",
          "name": "美術・デザイン",
          "topics": [
            {
              "id": "T_C54_01",
              "label": "絵画"
            },
            {
              "id": "T_C54_02",
              "label": "彫刻"
            },
            {
              "id": "T_C54_03",
              "label": "美術館"
            },
            {
              "id": "T_C54_04",
              "label": "現代美術"
            },
            {
              "id": "T_C54_05",
              "label": "デザイン"
            },
            {
              "id": "T_C54_06",
              "label": "建築",
              "duplicate": true,
              "context": "art_design_architecture"
            },
            {
              "id": "T_C54_07",
              "label": "写真芸術"
            },
            {
              "id": "T_C54_08",
              "label": "工芸"
            },
            {
              "id": "T_C54_09",
              "label": "アート史"
            },
            {
              "id": "T_C54_10",
              "label": "作品解説"
            }
          ],
          "query_anchor": null,
          "query_anchor_status": "topic_review_required",
          "query_anchor_candidate": "デザイン"
        },
        {
          "id": "C55",
          "name": "伝統文化",
          "topics": [
            {
              "id": "T_C55_01",
              "label": "伝統工芸"
            },
            {
              "id": "T_C55_02",
              "label": "祭り"
            },
            {
              "id": "T_C55_03",
              "label": "茶道"
            },
            {
              "id": "T_C55_04",
              "label": "華道"
            },
            {
              "id": "T_C55_05",
              "label": "書道"
            },
            {
              "id": "T_C55_06",
              "label": "着物"
            },
            {
              "id": "T_C55_07",
              "label": "神社"
            },
            {
              "id": "T_C55_08",
              "label": "寺院"
            },
            {
              "id": "T_C55_09",
              "label": "郷土文化"
            },
            {
              "id": "T_C55_10",
              "label": "民俗"
            }
          ],
          "query_anchor": null,
          "query_anchor_status": "topic_review_required",
          "query_anchor_candidate": "伝統文化"
        },
        {
          "id": "C56",
          "name": "舞台・パフォーマンス",
          "topics": [
            {
              "id": "T_C56_01",
              "label": "演劇"
            },
            {
              "id": "T_C56_02",
              "label": "ミュージカル"
            },
            {
              "id": "T_C56_03",
              "label": "舞台"
            },
            {
              "id": "T_C56_04",
              "label": "ダンス"
            },
            {
              "id": "T_C56_05",
              "label": "バレエ"
            },
            {
              "id": "T_C56_06",
              "label": "オペラ"
            },
            {
              "id": "T_C56_07",
              "label": "伝統芸能"
            },
            {
              "id": "T_C56_08",
              "label": "大道芸"
            },
            {
              "id": "T_C56_09",
              "label": "パフォーマンス"
            }
          ],
          "query_anchor": null,
          "query_anchor_status": "not_required",
          "query_anchor_candidate": null
        }
      ]
    },
    {
      "id": "D08",
      "name": "旅・地域・乗り物",
      "categories": [
        {
          "id": "C57",
          "name": "国内旅行",
          "topics": [
            {
              "id": "T_C57_01",
              "label": "北海道"
            },
            {
              "id": "T_C57_02",
              "label": "東北"
            },
            {
              "id": "T_C57_03",
              "label": "関東"
            },
            {
              "id": "T_C57_04",
              "label": "甲信越"
            },
            {
              "id": "T_C57_05",
              "label": "東海"
            },
            {
              "id": "T_C57_06",
              "label": "北陸"
            },
            {
              "id": "T_C57_07",
              "label": "関西"
            },
            {
              "id": "T_C57_08",
              "label": "中国"
            },
            {
              "id": "T_C57_09",
              "label": "四国"
            },
            {
              "id": "T_C57_10",
              "label": "九州"
            },
            {
              "id": "T_C57_11",
              "label": "沖縄"
            }
          ],
          "query_anchor": "旅行",
          "query_anchor_status": "active",
          "query_anchor_candidate": null
        },
        {
          "id": "C58",
          "name": "海外旅行",
          "topics": [
            {
              "id": "T_C58_01",
              "label": "東アジア"
            },
            {
              "id": "T_C58_02",
              "label": "東南アジア"
            },
            {
              "id": "T_C58_03",
              "label": "南アジア"
            },
            {
              "id": "T_C58_04",
              "label": "ヨーロッパ"
            },
            {
              "id": "T_C58_05",
              "label": "北米"
            },
            {
              "id": "T_C58_06",
              "label": "中南米"
            },
            {
              "id": "T_C58_07",
              "label": "中東"
            },
            {
              "id": "T_C58_08",
              "label": "アフリカ"
            },
            {
              "id": "T_C58_09",
              "label": "オセアニア"
            }
          ],
          "query_anchor": "旅行",
          "query_anchor_status": "active",
          "query_anchor_candidate": null
        },
        {
          "id": "C59",
          "name": "街歩き・地域",
          "topics": [
            {
              "id": "T_C59_01",
              "label": "東京"
            },
            {
              "id": "T_C59_02",
              "label": "大阪"
            },
            {
              "id": "T_C59_03",
              "label": "京都"
            },
            {
              "id": "T_C59_04",
              "label": "地方都市"
            },
            {
              "id": "T_C59_05",
              "label": "商店街"
            },
            {
              "id": "T_C59_06",
              "label": "路地"
            },
            {
              "id": "T_C59_07",
              "label": "港町"
            },
            {
              "id": "T_C59_08",
              "label": "温泉街"
            },
            {
              "id": "T_C59_09",
              "label": "旧市街"
            },
            {
              "id": "T_C59_10",
              "label": "街並み"
            }
          ],
          "query_anchor": "街歩き",
          "query_anchor_status": "active",
          "query_anchor_candidate": null
        },
        {
          "id": "C60",
          "name": "鉄道",
          "topics": [
            {
              "id": "T_C60_01",
              "label": "新幹線"
            },
            {
              "id": "T_C60_02",
              "label": "特急"
            },
            {
              "id": "T_C60_03",
              "label": "ローカル線"
            },
            {
              "id": "T_C60_04",
              "label": "私鉄"
            },
            {
              "id": "T_C60_05",
              "label": "地下鉄"
            },
            {
              "id": "T_C60_06",
              "label": "路面電車"
            },
            {
              "id": "T_C60_07",
              "label": "蒸気機関車"
            },
            {
              "id": "T_C60_08",
              "label": "貨物列車"
            },
            {
              "id": "T_C60_09",
              "label": "駅"
            },
            {
              "id": "T_C60_10",
              "label": "車窓"
            },
            {
              "id": "T_C60_11",
              "label": "鉄道史"
            }
          ],
          "query_anchor": null,
          "query_anchor_status": "not_required",
          "query_anchor_candidate": null
        },
        {
          "id": "C61",
          "name": "自動車",
          "topics": [
            {
              "id": "T_C61_01",
              "label": "新車"
            },
            {
              "id": "T_C61_02",
              "label": "旧車"
            },
            {
              "id": "T_C61_03",
              "label": "スポーツカー"
            },
            {
              "id": "T_C61_04",
              "label": "軽自動車"
            },
            {
              "id": "T_C61_05",
              "label": "SUV"
            },
            {
              "id": "T_C61_06",
              "label": "EV"
            },
            {
              "id": "T_C61_07",
              "label": "自動車整備"
            },
            {
              "id": "T_C61_08",
              "label": "ドライブ"
            },
            {
              "id": "T_C61_09",
              "label": "モータースポーツ",
              "duplicate": true,
              "context": "automobile_motorsport"
            },
            {
              "id": "T_C61_10",
              "label": "自動車史"
            }
          ],
          "query_anchor": null,
          "query_anchor_status": "topic_review_required",
          "query_anchor_candidate": "自動車"
        },
        {
          "id": "C62",
          "name": "航空",
          "topics": [
            {
              "id": "T_C62_01",
              "label": "旅客機"
            },
            {
              "id": "T_C62_02",
              "label": "空港"
            },
            {
              "id": "T_C62_03",
              "label": "航空会社"
            },
            {
              "id": "T_C62_04",
              "label": "パイロット"
            },
            {
              "id": "T_C62_05",
              "label": "航空管制"
            },
            {
              "id": "T_C62_06",
              "label": "飛行機撮影"
            },
            {
              "id": "T_C62_07",
              "label": "航空史"
            },
            {
              "id": "T_C62_08",
              "label": "軍用機"
            },
            {
              "id": "T_C62_09",
              "label": "空港ラウンジ"
            }
          ],
          "query_anchor": null,
          "query_anchor_status": "topic_review_required",
          "query_anchor_candidate": "飛行機"
        },
        {
          "id": "C63",
          "name": "船・海の交通",
          "topics": [
            {
              "id": "T_C63_01",
              "label": "フェリー"
            },
            {
              "id": "T_C63_02",
              "label": "客船"
            },
            {
              "id": "T_C63_03",
              "label": "貨物船"
            },
            {
              "id": "T_C63_04",
              "label": "クルーズ船"
            },
            {
              "id": "T_C63_05",
              "label": "港"
            },
            {
              "id": "T_C63_06",
              "label": "造船"
            },
            {
              "id": "T_C63_07",
              "label": "船旅"
            },
            {
              "id": "T_C63_08",
              "label": "漁船"
            },
            {
              "id": "T_C63_09",
              "label": "巨大船"
            },
            {
              "id": "T_C63_10",
              "label": "海運"
            }
          ],
          "query_anchor": null,
          "query_anchor_status": "topic_review_required",
          "query_anchor_candidate": "船"
        },
        {
          "id": "C64",
          "name": "旅のスタイル",
          "topics": [
            {
              "id": "T_C64_01",
              "label": "鉄道旅"
            },
            {
              "id": "T_C64_02",
              "label": "ドライブ旅"
            },
            {
              "id": "T_C64_03",
              "label": "徒歩旅"
            },
            {
              "id": "T_C64_04",
              "label": "自転車旅"
            },
            {
              "id": "T_C64_05",
              "label": "一人旅"
            },
            {
              "id": "T_C64_06",
              "label": "温泉旅"
            },
            {
              "id": "T_C64_07",
              "label": "グルメ旅"
            },
            {
              "id": "T_C64_08",
              "label": "秘境旅"
            },
            {
              "id": "T_C64_09",
              "label": "絶景旅"
            },
            {
              "id": "T_C64_10",
              "label": "長期旅行"
            }
          ],
          "query_anchor": "旅行",
          "query_anchor_status": "active",
          "query_anchor_candidate": null
        }
      ]
    }
  ]
};
