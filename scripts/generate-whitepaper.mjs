import { jsPDF } from 'jspdf';
import { writeFileSync } from 'fs';

const doc = new jsPDF({ unit: 'pt', format: 'a4' });
const W = doc.internal.pageSize.getWidth();
const H = doc.internal.pageSize.getHeight();
const BLUE = [0, 82, 255];
const DARK = [10, 10, 10];
const MUTED = [85, 85, 85];
const LIGHT = [243, 243, 243];
const margin = 56;
const contentW = W - margin * 2;

function newPage() {
  doc.addPage();
}

function pageFooter(label) {
  doc.setFontSize(8);
  doc.setTextColor(...MUTED);
  doc.text('HashPay Protocol — Confidential Whitepaper', margin, H - 28);
  doc.text(label, W - margin, H - 28, { align: 'right' });
  doc.setDrawColor(...BLUE);
  doc.setLineWidth(0.5);
  doc.line(margin, H - 38, W - margin, H - 38);
}

function sectionTag(text, y) {
  doc.setFontSize(8);
  doc.setTextColor(...BLUE);
  doc.setFont('helvetica', 'bold');
  doc.text(text.toUpperCase(), margin, y);
  return y + 16;
}

function heading(text, y, size = 28) {
  doc.setFontSize(size);
  doc.setTextColor(...DARK);
  doc.setFont('helvetica', 'bold');
  const lines = doc.splitTextToSize(text, contentW);
  doc.text(lines, margin, y);
  return y + lines.length * (size * 1.25);
}

function body(text, y, color = MUTED, size = 11) {
  doc.setFontSize(size);
  doc.setTextColor(...color);
  doc.setFont('helvetica', 'normal');
  const lines = doc.splitTextToSize(text, contentW);
  doc.text(lines, margin, y);
  return y + lines.length * (size * 1.6);
}

function divider(y) {
  doc.setDrawColor(...BLUE);
  doc.setLineWidth(0.3);
  doc.line(margin, y, W - margin, y);
  return y + 16;
}

function pill(text, x, y) {
  doc.setFontSize(7.5);
  doc.setTextColor(...BLUE);
  doc.setFont('helvetica', 'bold');
  const tw = doc.getTextWidth(text);
  doc.setDrawColor(...BLUE);
  doc.setLineWidth(0.5);
  doc.roundedRect(x, y - 10, tw + 16, 14, 3, 3, 'S');
  doc.text(text, x + 8, y);
  return x + tw + 28;
}

function statBox(value, label, sub, x, y, w) {
  doc.setFillColor(...LIGHT);
  doc.roundedRect(x, y, w, 80, 8, 8, 'F');
  doc.setFontSize(26);
  doc.setTextColor(...BLUE);
  doc.setFont('helvetica', 'bold');
  doc.text(value, x + w / 2, y + 34, { align: 'center' });
  doc.setFontSize(10);
  doc.setTextColor(...DARK);
  doc.text(label, x + w / 2, y + 52, { align: 'center' });
  doc.setFontSize(7.5);
  doc.setTextColor(...MUTED);
  doc.text(sub.toUpperCase(), x + w / 2, y + 66, { align: 'center' });
}

function featureCard(title, desc, icon, x, y, w) {
  doc.setFillColor(...LIGHT);
  doc.roundedRect(x, y, w, 100, 8, 8, 'F');
  doc.setFontSize(9);
  doc.setTextColor(...BLUE);
  doc.setFont('helvetica', 'bold');
  doc.text(icon, x + 14, y + 22);
  doc.setFontSize(11);
  doc.setTextColor(...DARK);
  doc.text(title, x + 14, y + 42);
  doc.setFontSize(9);
  doc.setTextColor(...MUTED);
  doc.setFont('helvetica', 'normal');
  const lines = doc.splitTextToSize(desc, w - 28);
  doc.text(lines, x + 14, y + 58);
}

// ─── COVER PAGE ───────────────────────────────────────────────────────────────
doc.setFillColor(...BLUE);
doc.rect(0, 0, W, 220, 'F');

doc.setFontSize(52);
doc.setTextColor(255, 255, 255);
doc.setFont('helvetica', 'bold');
doc.text('HashPay', margin, 110);

doc.setFontSize(14);
doc.setTextColor(255, 255, 255, 0.7);
doc.setFont('helvetica', 'normal');
doc.text('World\'s First Hybrid Payment Fintech', margin, 140);

doc.setFontSize(9);
doc.setTextColor(200, 220, 255);
doc.text('CONFIDENTIAL WHITEPAPER  //  v1.0  //  2026', margin, 165);

doc.setFontSize(9);
doc.setTextColor(200, 220, 255);
doc.text('Powered by SUI Network & Google Gemini AI', margin, 185);

let y = 260;
y = sectionTag('Abstract', y);
y = heading('Bridging the Fiat-Crypto Divide', y, 22);
y += 8;
y = body(
  'HashPay is a unified financial ecosystem that eliminates the fundamental incompatibility between traditional Web2 banking and Web3 decentralized assets. By combining institutional-grade real-time currency conversion with SUI\'s parallel execution engine and Gemini AI\'s intent processing, HashPay enables instant cross-border settlement across 150+ global corridors — making sending Naira and receiving Ghanaian Cedis as seamless as a local transfer.',
  y
);
y = divider(y + 8);
y = body('This document outlines the problem, architecture, technology, market opportunity, team, and vision behind HashPay Protocol.', y);

pageFooter('Cover');

// ─── PAGE 2: THE PROBLEM ──────────────────────────────────────────────────────
newPage();
y = 60;
y = sectionTag('01 — The Problem', y);
y = heading('The Liquidity Paradox', y, 28);
y += 8;
y = body(
  'Global finance is digital, yet cross-border friction costs over $120 billion annually in delayed settlements, failed transactions, and opaque fees. The barrier is not the ledger — it is the abstraction layer between systems that were never designed to communicate.',
  y
);
y = divider(y + 12);

const problems = [
  ['01', 'Hybrid Friction', 'Traditional banking and crypto remain fundamentally incompatible for daily use. Users are forced to operate two separate financial lives with no bridge between them.'],
  ['02', 'Liquidity Gaps', 'Cross-border friction costs $120B+ annually in delayed settlements. Correspondent banking chains introduce 3–5 day delays and 5–8% fee leakage on every transaction.'],
  ['03', 'Access Barriers', 'Complexity prevents millions of users across Africa and emerging markets from accessing global financial corridors. The UX of DeFi remains hostile to mainstream adoption.'],
];

for (const [num, title, desc] of problems) {
  doc.setFillColor(...LIGHT);
  doc.roundedRect(margin, y, contentW, 72, 8, 8, 'F');
  doc.setFillColor(...BLUE);
  doc.roundedRect(margin + 12, y + 16, 28, 28, 4, 4, 'F');
  doc.setFontSize(10);
  doc.setTextColor(255, 255, 255);
  doc.setFont('helvetica', 'bold');
  doc.text(num, margin + 26, y + 35, { align: 'center' });
  doc.setFontSize(12);
  doc.setTextColor(...DARK);
  doc.text(title, margin + 52, y + 28);
  doc.setFontSize(9);
  doc.setTextColor(...MUTED);
  doc.setFont('helvetica', 'normal');
  const lines = doc.splitTextToSize(desc, contentW - 64);
  doc.text(lines, margin + 52, y + 44);
  y += 88;
}

pageFooter('The Problem');

// ─── PAGE 3: THE SOLUTION ─────────────────────────────────────────────────────
newPage();
y = 60;
y = sectionTag('02 — The Solution', y);
y = heading('Hybrid Liquidity Architecture', y, 28);
y += 8;
y = body(
  'HashPay is the intelligent bridge between traditional fiat banking and the decentralized economy. Our real-time conversion engine handles cross-border exchange at institutional rates, automatically — no manual steps, no intermediary banks, no 3-day delays.',
  y
);
y = divider(y + 12);

y = sectionTag('Core Mechanism', y);
y += 4;

const solutions = [
  ['Intelligent Real-time Conversion', 'Automated multi-currency conversion across 150+ corridors at institutional-grade rates. Naira to Cedi, USD to USDC — handled in a single atomic transaction.'],
  ['Hybrid Settlement Layer', 'A unified ledger that simultaneously records fiat and on-chain state. Users interact with one interface; the protocol handles the complexity beneath.'],
  ['AI Intent Processing', 'Gemini AI interprets natural language payment commands, abstracting cryptographic complexity entirely. "Send $200 to Lagos" becomes a fully executed cross-chain transaction.'],
  ['On-Chain Auditability', 'Every transaction is anchored to SUI\'s immutable object model, providing full auditability without sacrificing speed or user experience.'],
];

for (const [title, desc] of solutions) {
  doc.setFillColor(...LIGHT);
  doc.roundedRect(margin, y, contentW, 58, 6, 6, 'F');
  doc.setFillColor(...BLUE);
  doc.circle(margin + 20, y + 20, 5, 'F');
  doc.setFontSize(11);
  doc.setTextColor(...DARK);
  doc.setFont('helvetica', 'bold');
  doc.text(title, margin + 36, y + 24);
  doc.setFontSize(9);
  doc.setTextColor(...MUTED);
  doc.setFont('helvetica', 'normal');
  const lines = doc.splitTextToSize(desc, contentW - 48);
  doc.text(lines, margin + 36, y + 38);
  y += 70;
}

pageFooter('The Solution');

// ─── PAGE 4: ECOSYSTEM FEATURES ───────────────────────────────────────────────
newPage();
y = 60;
y = sectionTag('03 — Ecosystem', y);
y = heading('Four Pillars of the HashPay Ecosystem', y, 28);
y += 12;

const features = [
  ['◈  Hybrid Ecosystem', 'A unified application bridging traditional Web2 bank transfers with Web3 crypto assets. One app, one balance, infinite corridors.'],
  ['◎  150+ Corridors', 'Instant cross-border settlement across African and global markets with zero manual friction. Real-time FX at institutional rates.'],
  ['⬡  Banking Tools', 'Multi-currency accounts, virtual cards, and treasury tools for borderless businesses. Full banking-grade compliance built in.'],
  ['⬢  Web3 Gateway', 'Multi-chain crypto payment gateway with on-chain settlement and full auditability. Supports SUI, EVM, and beyond.'],
];

const colW = (contentW - 12) / 2;
const positions = [
  [margin, y],
  [margin + colW + 12, y],
  [margin, y + 116],
  [margin + colW + 12, y + 116],
];

features.forEach(([title, desc], i) => {
  const [fx, fy] = positions[i];
  featureCard(title, desc, '', fx, fy, colW);
});

y += 240;
y = divider(y);
y = sectionTag('Value Proposition', y);
y += 4;
y = body(
  'HashPay is not a wallet. It is not a crypto exchange. It is the first unified financial operating system that treats fiat and digital assets as equal citizens of the same ledger — enabling any user, anywhere, to transact globally without friction.',
  y
);

pageFooter('Ecosystem');

// ─── PAGE 5: TECHNOLOGY ───────────────────────────────────────────────────────
newPage();
y = 60;
y = sectionTag('04 — Technology', y);
y = heading('The Stack', y, 28);
y += 8;
y = body('Built on two foundational technologies that together enable the first truly autonomous, intent-driven global payment network.', y);
y = divider(y + 12);

// SUI card
doc.setFillColor(...LIGHT);
doc.roundedRect(margin, y, contentW, 140, 10, 10, 'F');
doc.setFillColor(...BLUE);
doc.roundedRect(margin + 16, y + 16, 40, 40, 8, 8, 'F');
doc.setFontSize(18);
doc.setTextColor(255, 255, 255);
doc.setFont('helvetica', 'bold');
doc.text('S', margin + 36, y + 43, { align: 'center' });
doc.setFontSize(16);
doc.setTextColor(...DARK);
doc.text('SUI Network', margin + 68, y + 40);
doc.setFontSize(9.5);
doc.setTextColor(...MUTED);
doc.setFont('helvetica', 'normal');
const suiDesc = 'SUI\'s parallel execution engine and native object model allow for millions of transactions per second, making real-time global commerce not just possible but economically viable. HashPay\'s smart contracts are written in Move, providing formal verification guarantees on every settlement.';
const suiLines = doc.splitTextToSize(suiDesc, contentW - 32);
doc.text(suiLines, margin + 16, y + 68);
let px = margin + 16;
for (const tag of ['#OBJECT_MODEL', '#PARALLEL_EXEC', '#MOVE_LANG', '#SUB_SECOND_FINALITY']) {
  px = pill(tag, px, y + 128);
}
y += 156;

// Gemini card
doc.setFillColor(...BLUE);
doc.roundedRect(margin, y, contentW, 140, 10, 10, 'F');
doc.setFillColor(255, 255, 255);
doc.roundedRect(margin + 16, y + 16, 40, 40, 8, 8, 'F');
doc.setFontSize(12);
doc.setTextColor(...BLUE);
doc.setFont('helvetica', 'bold');
doc.text('AI', margin + 36, y + 41, { align: 'center' });
doc.setFontSize(16);
doc.setTextColor(255, 255, 255);
doc.text('Google Gemini AI', margin + 68, y + 40);
doc.setFontSize(9.5);
doc.setTextColor(220, 230, 255);
doc.setFont('helvetica', 'normal');
const gemDesc = 'Gemini processes payment intent at the edge, enabling the first truly conversational DeFi experience. Users describe what they want in plain language; Gemini translates intent into signed, optimized on-chain transactions — abstracting all cryptographic complexity from the end user.';
const gemLines = doc.splitTextToSize(gemDesc, contentW - 32);
doc.text(gemLines, margin + 16, y + 68);
doc.setTextColor(180, 200, 255);
doc.setFontSize(8);
let gx = margin + 16;
for (const tag of ['#LLM_INTENT', '#VOICE_COMMERCE', '#DYNAMIC_UX', '#EDGE_INFERENCE']) {
  doc.text(tag, gx, y + 128);
  gx += doc.getTextWidth(tag) + 20;
}
y += 156;

pageFooter('Technology');

// ─── PAGE 6: MARKET ───────────────────────────────────────────────────────────
newPage();
y = 60;
y = sectionTag('05 — Market Opportunity', y);
y = heading('A $800B+ Addressable Market', y, 28);
y += 8;
y = body(
  'The intersection of high-performance blockchain infrastructure and AI intent processing represents the next frontier of global finance. HashPay is positioned at the exact convergence point.',
  y
);
y = divider(y + 12);

const statW = (contentW - 24) / 3;
statBox('$800B+', 'Global Remittances', 'Total Addressable Market', margin, y, statW);
statBox('150+', 'Global Corridors', 'Active Payment Corridors', margin + statW + 12, y, statW);
statBox('<2s', 'Settlement Time', 'Instant Hybrid Settlement', margin + (statW + 12) * 2, y, statW);
y += 100;

y = divider(y + 8);
doc.setFillColor(...BLUE);
doc.roundedRect(margin, y, contentW, 80, 10, 10, 'F');
doc.setFontSize(13);
doc.setTextColor(255, 255, 255);
doc.setFont('helvetica', 'bolditalic');
const quote = '"We aren\'t just capturing market share. We are creating a new category: Autonomous Intent-Driven Commerce."';
const qLines = doc.splitTextToSize(quote, contentW - 40);
const qH = qLines.length * 18;
doc.text(qLines, W / 2, y + (80 - qH) / 2 + 14, { align: 'center' });
y += 96;

y = divider(y);
y = sectionTag('Target Segments', y);
y += 4;

const segments = [
  ['African Diaspora Remittances', 'The African remittance corridor processes $100B+ annually with average fees of 8%. HashPay targets sub-1% fees with instant settlement.'],
  ['SME Cross-Border Commerce', 'Small and medium businesses operating across borders face 3–5 day settlement delays. HashPay\'s treasury tools eliminate this entirely.'],
  ['Crypto-Native Users', 'The 500M+ global crypto users lack a seamless on-ramp to real-world commerce. HashPay\'s Web3 gateway bridges this gap natively.'],
];

for (const [title, desc] of segments) {
  doc.setFontSize(11);
  doc.setTextColor(...DARK);
  doc.setFont('helvetica', 'bold');
  doc.text(`• ${title}`, margin, y);
  y += 16;
  doc.setFontSize(9);
  doc.setTextColor(...MUTED);
  doc.setFont('helvetica', 'normal');
  const lines = doc.splitTextToSize(desc, contentW - 16);
  doc.text(lines, margin + 12, y);
  y += lines.length * 14 + 10;
}

pageFooter('Market Opportunity');

// ─── PAGE 7: TEAM ─────────────────────────────────────────────────────────────
newPage();
y = 60;
y = sectionTag('06 — The Team', y);
y = heading('The Architects', y, 28);
y += 8;
y = body('Building the foundation for autonomous, AI-driven global commerce.', y);
y = divider(y + 12);

const team = [
  ['Asadu Benedict Pascal', 'Chief Executive Officer', 'Visionary leader driving HashPay\'s strategic direction and global expansion across African and international markets.'],
  ['Peter Martins N', 'Chief Technical Lead', 'Architect of HashPay\'s hybrid settlement engine and SUI smart contract infrastructure.'],
  ['Victor Isiguzor Uzoma', 'Chief Product Manager', 'Owns the end-to-end product vision, ensuring seamless UX across Web2 and Web3 surfaces.'],
  ['Retyit Watson', 'Chief Marketing & Security Officer', 'Leads brand strategy and security posture, ensuring HashPay\'s market presence and protocol integrity.'],
  ['Sheriff Mudasir', 'Chief Audit & Security Manager', 'Oversees compliance, on-chain audit trails, and institutional-grade security frameworks.'],
  ['Yusuf Hussaini', 'Chief Technical Support Officer', 'Ensures platform reliability, developer tooling, and 24/7 operational excellence.'],
];

const colWt = (contentW - 12) / 2;
team.forEach(([name, role, bio], i) => {
  const col = i % 2;
  const row = Math.floor(i / 2);
  const tx = margin + col * (colWt + 12);
  const ty = y + row * 110;
  doc.setFillColor(...LIGHT);
  doc.roundedRect(tx, ty, colWt, 100, 8, 8, 'F');
  doc.setFillColor(...BLUE);
  doc.circle(tx + 20, ty + 22, 10, 'F');
  doc.setFontSize(9);
  doc.setTextColor(255, 255, 255);
  doc.setFont('helvetica', 'bold');
  doc.text(name[0], tx + 20, ty + 26, { align: 'center' });
  doc.setFontSize(11);
  doc.setTextColor(...DARK);
  doc.text(name, tx + 38, ty + 22);
  doc.setFontSize(8);
  doc.setTextColor(...BLUE);
  doc.setFont('helvetica', 'bold');
  doc.text(role.toUpperCase(), tx + 38, ty + 36);
  doc.setFontSize(8.5);
  doc.setTextColor(...MUTED);
  doc.setFont('helvetica', 'normal');
  const lines = doc.splitTextToSize(bio, colWt - 48);
  doc.text(lines, tx + 38, ty + 52);
});

pageFooter('The Team');

// ─── PAGE 8: VISION & CTA ─────────────────────────────────────────────────────
newPage();
y = 60;
y = sectionTag('07 — Vision', y);
y = heading('Liquidity, Uncontained.', y, 32);
y += 8;
y = body(
  'We aren\'t just building a wallet. We are building the foundational rails for the next $100 trillion in digital commerce. HashPay is where the chain meets the human — the first protocol that makes global finance feel local.',
  y
);
y = divider(y + 12);

const visionStats = [['150+', 'Global Corridors'], ['1M+', 'Hybrid Users'], ['$10B', 'Cross-Border Flow']];
const vsW = (contentW - 24) / 3;
visionStats.forEach(([val, lbl], i) => {
  const vx = margin + i * (vsW + 12);
  doc.setFillColor(...LIGHT);
  doc.roundedRect(vx, y, vsW, 64, 8, 8, 'F');
  doc.setFontSize(22);
  doc.setTextColor(...BLUE);
  doc.setFont('helvetica', 'bold');
  doc.text(val, vx + vsW / 2, y + 30, { align: 'center' });
  doc.setFontSize(8);
  doc.setTextColor(...MUTED);
  doc.setFont('helvetica', 'bold');
  doc.text(lbl.toUpperCase(), vx + vsW / 2, y + 48, { align: 'center' });
});
y += 80;

y = divider(y);
y = sectionTag('08 — Call to Action', y);
y = heading('Execute Now.', y, 32);
y += 8;
y = body(
  'HashPay is actively seeking strategic partnerships for the 2026 SUI Mainnet rollout. We are looking for institutional investors, liquidity providers, and ecosystem partners who understand that the future of global commerce is hybrid, autonomous, and instant.',
  y
);
y += 16;

doc.setFillColor(...BLUE);
doc.roundedRect(margin, y, 200, 44, 22, 22, 'F');
doc.setFontSize(13);
doc.setTextColor(255, 255, 255);
doc.setFont('helvetica', 'bold');
doc.text('Become a Partner', margin + 100, y + 27, { align: 'center' });
y += 60;

y = divider(y);
doc.setFontSize(9);
doc.setTextColor(...MUTED);
doc.setFont('helvetica', 'normal');
doc.text('© 2026 HashPay Protocol. Powered by SUI & Google Gemini.', margin, y + 12);
doc.text('This document is confidential and intended solely for the recipient.', margin, y + 26);

pageFooter('Vision & CTA');

// ─── OUTPUT ───────────────────────────────────────────────────────────────────
const buf = Buffer.from(doc.output('arraybuffer'));
writeFileSync('public/HashPay_Whitepaper.pdf', buf);
console.log('✓ HashPay_Whitepaper.pdf written to public/');
