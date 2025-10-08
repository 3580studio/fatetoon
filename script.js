// ===== FATETOON Script =====
// form 입력 감지 → calculateSaju() 실행

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("saju-form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    calculateSaju();
  });
});

// 시간 선택 드롭다운 자동 생성 (자시~해시)
document.addEventListener("DOMContentLoaded", () => {
  const hourSelect = document.getElementById("birthtime");
  const branches = ["자", "축", "인", "묘", "진", "사", "오", "미", "신", "유", "술", "해"];
  branches.forEach((b, i) => {
    const opt = document.createElement("option");
    opt.value = i;
    opt.text = `${b}시 (${(i * 2) % 24}:00)`;
    hourSelect.appendChild(opt);
  });
});
