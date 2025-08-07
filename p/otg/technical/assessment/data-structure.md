# 資料結構文件

本文件概述了我們儲存庫中用於工具提交和評估的資料結構。

## 總覽

工具儲存在一個 JSON 陣列中，其中每個工具都由一個物件表示，該物件包含描述其功能、能力和評估結果的各種欄位。

## 欄位說明

### 元資料
- `id` (字串)：工具的唯一識別碼
- `date_submitted` (整數)：初始提交的 Unix 時間戳
- `date_updated` (整數)：上次更新的 Unix 時間戳
- `submitted_by` (字串)：提交者的 GitHub 使用者名稱

### 基本資訊
- `tool-name` (字串)：工具名稱
- `tool-url` (字串)：官方網站或儲存庫 URL
- `category` (字串)：工具類別（例如，瀏覽器、密碼管理）
- `description` (字串)：工具用途的簡要說明
- `status` (字串)：目前狀態（活躍、不活躍、實驗性）

### 核心功能與相容性
- `core-features` (字串)：以逗號分隔的主要功能清單
- `os-compatibility` (字串)：支援的作業系統
- `offline-functionality` (字串)：「是」、「否」或「部分」
- `mobile-friendly` (字串)：「是」、「否」或「部分」
- `languages-supported` (字串)：支援的語言
- `technical-level` (字串)：所需的技術專業知識（初學者、中級、進階）

### 安全與隱私
- `security-privacy-features` (字串)：主要安全和隱私功能
- `data-collection-level` (字串)：「無」、「最少」或「廣泛」
- `security-privacy-strength-rating` (字串)：1-5 分的評分

### 部署與技術
- `deployment-architecture` (字串)：工具的部署方式
- `license` (字串)：授權類型（建議使用 SPDX 識別碼）
- `cost` (字串)：「完全免費」、「免費核心」、「訂閱模式」、「一次性購買」

### 維護與支援
- `maintenance-sustainability` (字串)：維護狀態和資金的說明
- `community-support` (字串)：「是」、「否」或「有限」
- `maintenance-sustainability-rating` (字串)：1-5 分的評分

### 效能與評分
- `operational-functionality-rating` (字串)：1-5 分的評分
- `usability-rating` (字串)：1-5 分的評分
- `effectiveness-reliability-rating` (字串)：1-5 分的評分
- `overall-rating` (字串)：所有評分的加權平均值

### 文件與測試
- `full-documentation` (字串)：完整文件的 URL
- `version-tested` (字串)：測試的版本號碼
- `date-tested` (字串)：測試日期（YYYY-MM-DD）
- `testing-environment` (字串)：測試環境的說明

### 其他資訊
- `limitations-vulnerabilities` (字串)：已知的限制或安全問題

## 範例 JSON

```json
{
    "id": "example-id-123",
    "date_submitted": 1744747334,
    "date_updated": 1744750500,
    "submitted_by": "username",
    "tool-name": "Example Tool",
    "tool-url": "https://example.com",
    "category": "Browser",
    "description": "A privacy-focused web browser",
    "status": "Active",
    "core-features": "Feature 1, Feature 2, Feature 3",
    "os-compatibility": "Windows, Linux, macOS",
    "offline-functionality": "Yes",
    "mobile-friendly": "Yes",
    "languages-supported": "English, Spanish, French",
    "technical-level": "Beginner",
    "security-privacy-features": "Feature A, Feature B",
    "data-collection-level": "Minimal",
    "security-privacy-strength-rating": "4.5",
    "deployment-architecture": "Desktop Application",
    "license": "MIT",
    "cost": "Fully Free",
    "maintenance-sustainability": "Regular updates, community-funded",
    "community-support": "Yes",
    "maintenance-sustainability-rating": "4.0",
    "operational-functionality-rating": "4.2",
    "usability-rating": "4.3",
    "effectiveness-reliability-rating": "4.4",
    "overall-rating": "4.3",
    "full-documentation": "https://docs.example.com",
    "version-tested": "1.0.0",
    "date-tested": "2024-03-21",
    "testing-environment": "Windows 11, macOS 14.2",
    "limitations-vulnerabilities": "Limited to specific use cases"
}
```

## 說明

1. 所有評分均為 1-5 分，數字越高越好
2. 日期應為 YYYY-MM-DD 格式
3. URL 應包含協定 (https://)
4. 整體評分是個別評分的加權平均值
5. 除非明確標示為可選，否則所有欄位都是必填的