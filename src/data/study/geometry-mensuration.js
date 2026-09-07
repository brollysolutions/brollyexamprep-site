/**
 * Geometry and Mensuration —
 * /study-material/mathematics/geometry-mensuration/
 *
 * Plane geometry, solid mensuration and coordinate geometry. Formula-dense by
 * design, because these are the topics where a forgotten formula costs the
 * whole question and a remembered one costs thirty seconds.
 */
export default {
  subject: 'mathematics',
  subjectName: 'Mathematics',
  slug: 'geometry-mensuration',
  title: 'Geometry & Mensuration',
  seoTitle: 'Geometry and Mensuration | Triangles, Circles, Volume Formulas & Practice',
  metaDescription:
    'Complete geometry and mensuration study material for SSC, banking, CAT, JEE and state exams — lines and angles, triangles and similarity, circles.',
  readMinutes: 24,
  lead: [
    'Geometry and mensuration are the most formula-dependent topics in any quantitative paper, and also the most reliably scoring. A mensuration question with the right formula takes under a minute; without it, no amount of reasoning will produce the answer. That makes this the one area where memorisation genuinely pays.',
    'The formulas are therefore gathered here by shape, in the order a question would need them, with the derivation given only where it makes the formula easier to remember — as with the cone\'s slant height, which is just Pythagoras applied to the radius and the height.',
  ],

  weightage: [
    { exam: 'SSC CGL Tier 1 and 2', count: '5–8 questions', note: 'Geometry and mensuration together form one of the largest quantitative blocks.' },
    { exam: 'CAT Quantitative Ability', count: '4–6 questions', note: 'Geometry is a consistently significant area, often with non-standard configurations.' },
    { exam: 'Banking Quantitative Aptitude', count: '1–3 questions', note: 'Mostly mensuration, usually straightforward substitution.' },
    { exam: 'JEE Main / Advanced', count: '15–20% of the mathematics paper', note: 'Chiefly coordinate geometry — straight lines, circles and conic sections.' },
    { exam: 'RRB NTPC / Group D', count: '2–4 questions', note: 'Basic area, perimeter and volume.' },
  ],

  contents: [
    { icon: 'target', title: 'Lines and angles', sub: 'The starting definitions', href: '#lines' },
    { icon: 'layers', title: 'Triangles', sub: 'Properties, congruence, similarity', href: '#triangles' },
    { icon: 'globe', title: 'Circles', sub: 'Chords, tangents and angles', href: '#circles' },
    { icon: 'doc', title: 'Quadrilaterals and polygons', sub: 'Properties and angle sums', href: '#polygons' },
    { icon: 'chart', title: 'Areas', sub: 'Two-dimensional mensuration', href: '#areas' },
    { icon: 'refresh', title: 'Solids', sub: 'Surface area and volume', href: '#solids' },
    { icon: 'search', title: 'Coordinate geometry', sub: 'Points, lines and distance', href: '#coordinate' },
    { icon: 'check', title: 'Solved examples', sub: 'Eight questions worked through', href: '#examples' },
  ],

  sections: [
    /* ── 1 ─────────────────────────────────────────────────────── */
    {
      id: 'lines',
      heading: 'Lines and angles',
      eyebrow: 'The starting definitions',
      intro:
        'The vocabulary everything else uses. Short, and worth getting exactly right, because questions are frequently framed in these terms rather than in numbers.',
      blocks: [
        {
          type: 'defs',
          items: [
            [
              'Types of angle',
              'Acute is less than 90°, right is exactly 90°, obtuse is between 90° and 180°, straight is 180°, reflex is between 180° and 360°, and complete is 360°. Two angles are complementary if they sum to 90° and supplementary if they sum to 180° — the pair of terms is regularly swapped in wrong options.',
            ],
            [
              'Angles on a line and at a point',
              'Angles on a straight line sum to 180°; angles round a point sum to 360°. When two lines cross, the vertically opposite angles are equal and adjacent angles are supplementary.',
            ],
            [
              'Parallel lines cut by a transversal',
              'Corresponding angles are equal, alternate interior angles are equal, alternate exterior angles are equal, and co-interior or allied angles are supplementary. Each of these is both a property of parallel lines and a test for them, which is how most parallel-line proofs work.',
            ],
            [
              'Lines in a triangle',
              'A median joins a vertex to the midpoint of the opposite side; the three medians meet at the centroid, which divides each in the ratio 2:1 from the vertex. An altitude is perpendicular from a vertex to the opposite side; the three meet at the orthocentre. An angle bisector splits an angle in two; the three meet at the incentre, the centre of the inscribed circle. A perpendicular bisector of a side; the three meet at the circumcentre, the centre of the circumscribed circle. In an equilateral triangle all four coincide.',
            ],
          ],
        },
      ],
    },

    /* ── 2 ─────────────────────────────────────────────────────── */
    {
      id: 'triangles',
      heading: 'Triangles',
      eyebrow: 'Properties, congruence, similarity',
      intro:
        'The single most examined figure in geometry, because every polygon can be decomposed into triangles and because similarity gives a powerful method for finding unknown lengths.',
      blocks: [
        {
          type: 'formula',
          title: 'Triangle relations',
          items: [
            { expr: 'Sum of the interior angles = 180°', note: 'And an exterior angle equals the sum of the two opposite interior angles.' },
            { expr: 'a² + b² = c² in a right triangle', note: 'Pythagoras. Common triples worth recognising instantly: 3-4-5, 5-12-13, 8-15-17, 7-24-25 and their multiples.' },
            { expr: 'Area = ½ × base × height', note: 'Any side may serve as the base, with the corresponding altitude.' },
            { expr: 'Area = √[s(s − a)(s − b)(s − c)], where s = (a+b+c)/2', note: 'Heron\'s formula — the one to use when all three sides are known but no height is.' },
            { expr: 'Area = ½ab sin C', note: 'When two sides and the included angle are known.' },
            { expr: 'Equilateral triangle of side a: area = (√3/4)a², height = (√3/2)a', note: 'Both worth memorising; they appear constantly.' },
            { expr: 'Triangle inequality: the sum of any two sides exceeds the third', note: 'And the difference of any two is less than the third — which is how questions about whether a triangle can exist are answered.' },
          ],
        },
        {
          type: 'defs',
          items: [
            [
              'Congruence',
              'Two triangles are congruent — identical in shape and size — if they satisfy SSS, SAS, ASA, AAS or, for right triangles, RHS. Note that SSA is not a valid test, which is exactly why it appears among the wrong options.',
            ],
            [
              'Similarity',
              'Two triangles are similar — the same shape, possibly different size — if they satisfy AAA, SAS with the included angle equal and the sides in proportion, or SSS with all three sides in proportion. Corresponding angles are then equal and corresponding sides in a fixed ratio.',
            ],
            [
              'The ratio result that matters most',
              'If two triangles are similar with sides in ratio k, their perimeters are in ratio k but their areas are in ratio k². For similar solids, volumes are in ratio k³. Forgetting to square the ratio for areas is the commonest single error in this topic.',
            ],
            [
              'The basic proportionality theorem',
              'A line drawn parallel to one side of a triangle divides the other two sides in the same ratio — Thales\'s theorem. Its converse is equally useful: a line dividing two sides proportionally is parallel to the third. Most similar-triangle questions in an aptitude paper reduce to this.',
            ],
            [
              'Special centres and circles',
              'The circumradius R and inradius r relate to the area A and the sides by A = rs, where s is the semi-perimeter, and A = abc/4R. In a right triangle, the circumcentre is the midpoint of the hypotenuse and R is half the hypotenuse.',
            ],
          ],
        },
      ],
    },

    /* ── 3 ─────────────────────────────────────────────────────── */
    {
      id: 'circles',
      heading: 'Circles',
      eyebrow: 'Chords, tangents and angles',
      intro:
        'A compact set of theorems, each of which converts a hard-looking configuration into a simple one.',
      blocks: [
        {
          type: 'formula',
          title: 'Circle measurements',
          items: [
            { expr: 'Circumference = 2πr; Area = πr²', note: 'The two starting formulas; π is approximately 22/7 or 3.1416.' },
            { expr: 'Arc length = (θ/360) × 2πr', note: 'For a sector of angle θ degrees.' },
            { expr: 'Sector area = (θ/360) × πr²', note: 'The same fraction applied to the area.' },
            { expr: 'Area of a segment = sector area − triangle area', note: 'The triangle being the one formed by the two radii and the chord.' },
            { expr: 'Area of a ring = π(R² − r²)', note: 'For an annulus between two concentric circles.' },
          ],
        },
        {
          type: 'defs',
          items: [
            [
              'Angle theorems',
              'The angle subtended by an arc at the centre is twice the angle it subtends at any point on the remaining circumference. Angles in the same segment are equal. The angle in a semicircle is a right angle — a special case of the first, since the diameter subtends 180° at the centre.',
            ],
            [
              'Cyclic quadrilaterals',
              'A quadrilateral whose four vertices lie on a circle. Its opposite angles are supplementary, and an exterior angle equals the interior opposite angle. The converse holds too, which is how a question establishes that four points are concyclic.',
            ],
            [
              'Chords',
              'The perpendicular from the centre to a chord bisects it, and conversely the line from the centre to the midpoint of a chord is perpendicular to it. Equal chords are equidistant from the centre, and chords equidistant from the centre are equal. The longest chord is the diameter.',
            ],
            [
              'Tangents',
              'A tangent is perpendicular to the radius at the point of contact. The two tangents drawn to a circle from an external point are equal in length, and they subtend equal angles at the centre. The alternate segment theorem states that the angle between a tangent and a chord equals the angle in the alternate segment.',
            ],
          ],
        },
      ],
    },

    /* ── 4 ─────────────────────────────────────────────────────── */
    {
      id: 'polygons',
      heading: 'Quadrilaterals and polygons',
      eyebrow: 'Properties and angle sums',
      intro:
        'Quadrilaterals form a hierarchy, and knowing which properties are inherited from which parent answers most questions in this section.',
      blocks: [
        {
          type: 'table',
          caption: 'The quadrilateral family',
          head: ['Figure', 'Defining property', 'What follows'],
          rows: [
            ['Trapezium', 'One pair of opposite sides parallel', 'Area = ½ × (sum of parallel sides) × height. An isosceles trapezium has equal non-parallel sides and equal base angles.'],
            ['Parallelogram', 'Both pairs of opposite sides parallel', 'Opposite sides and opposite angles are equal; diagonals bisect each other; each diagonal divides it into two congruent triangles. Area = base × height.'],
            ['Rhombus', 'A parallelogram with all four sides equal', 'Diagonals bisect each other at right angles and bisect the angles. Area = ½ × product of the diagonals.'],
            ['Rectangle', 'A parallelogram with all angles right angles', 'Diagonals are equal and bisect each other. Area = length × breadth; diagonal = √(l² + b²).'],
            ['Square', 'Both a rhombus and a rectangle', 'All the properties of both: equal sides, right angles, equal diagonals bisecting at right angles. Area = a²; diagonal = a√2.'],
            ['Kite', 'Two pairs of adjacent sides equal', 'One diagonal bisects the other at right angles. Area = ½ × product of the diagonals.'],
          ],
        },
        {
          type: 'formula',
          title: 'Polygon relations',
          items: [
            { expr: 'Sum of interior angles = (n − 2) × 180°', note: 'Because a polygon of n sides can be divided into n − 2 triangles.' },
            { expr: 'Sum of exterior angles = 360°', note: 'For any convex polygon, whatever the number of sides — a result that surprises people and is often the key to a question.' },
            { expr: 'Each interior angle of a regular polygon = (n − 2)180°/n', note: 'And each exterior angle is 360°/n.' },
            { expr: 'Number of diagonals = n(n − 3)/2', note: 'Each vertex joins to n − 3 others, and each diagonal is counted twice.' },
          ],
        },
      ],
    },

    /* ── 5 ─────────────────────────────────────────────────────── */
    {
      id: 'areas',
      heading: 'Areas',
      eyebrow: 'Two-dimensional mensuration',
      intro:
        'A collected reference of the plane area formulas, together with the two ratio results that turn a hard question into an easy one.',
      blocks: [
        {
          type: 'table',
          caption: 'Plane figures',
          head: ['Figure', 'Area', 'Perimeter'],
          rows: [
            ['Square of side a', 'a²', '4a; diagonal a√2'],
            ['Rectangle l by b', 'lb', '2(l + b); diagonal √(l² + b²)'],
            ['Triangle', '½ × base × height, or Heron\'s formula', 'a + b + c'],
            ['Equilateral triangle of side a', '(√3/4)a²', '3a; height (√3/2)a'],
            ['Parallelogram', 'base × height', '2(a + b)'],
            ['Rhombus', '½ × d₁ × d₂', '4a, where a = ½√(d₁² + d₂²)'],
            ['Trapezium', '½ × (a + b) × h', 'Sum of all four sides'],
            ['Circle of radius r', 'πr²', '2πr'],
            ['Regular hexagon of side a', '(3√3/2)a²', '6a — it is six equilateral triangles'],
          ],
        },
        {
          type: 'defs',
          items: [
            [
              'The scaling results',
              'If every linear dimension of a plane figure is multiplied by k, the perimeter is multiplied by k and the area by k². For a solid, the surface area is multiplied by k² and the volume by k³. Almost every "if the side is increased by 20%, by what per cent does the area increase" question is this result in disguise.',
            ],
            [
              'Paths and borders',
              'For a path of uniform width w around a rectangle, work out the area of the larger rectangle and subtract the smaller. For a path inside, subtract 2w from each dimension; for a path outside, add 2w. Drawing the figure before computing prevents the commonest error, which is adding w instead of 2w.',
            ],
            [
              'Figures inscribed and circumscribed',
              'A square inscribed in a circle of radius r has diagonal 2r and therefore side r√2 and area 2r². A circle inscribed in a square of side a has radius a/2. An equilateral triangle inscribed in a circle of radius r has side r√3. These three appear repeatedly and are worth having ready.',
            ],
          ],
        },
      ],
    },

    /* ── 6 ─────────────────────────────────────────────────────── */
    {
      id: 'solids',
      heading: 'Solids',
      eyebrow: 'Surface area and volume',
      intro:
        'The most memorisation-dependent part of the quantitative syllabus, and the most mechanical once the formulas are secure. Note throughout the distinction between curved surface area and total surface area.',
      blocks: [
        {
          type: 'table',
          caption: 'The standard solids',
          head: ['Solid', 'Volume', 'Surface area'],
          rows: [
            ['Cube of edge a', 'a³', 'Total 6a²; each face a²; diagonal a√3'],
            ['Cuboid l × b × h', 'lbh', 'Total 2(lb + bh + hl); diagonal √(l² + b² + h²)'],
            ['Cylinder radius r, height h', 'πr²h', 'Curved 2πrh; total 2πr(r + h)'],
            ['Cone radius r, height h', '⅓πr²h', 'Curved πrl; total πr(r + l), where the slant height l = √(r² + h²)'],
            ['Sphere of radius r', '(4/3)πr³', '4πr² — a sphere has only one surface, so there is no separate curved and total'],
            ['Hemisphere of radius r', '(2/3)πr³', 'Curved 2πr²; total 3πr², the extra πr² being the flat circular face'],
            ['Prism', 'Base area × height', 'Lateral = perimeter of base × height'],
            ['Pyramid', '⅓ × base area × height', 'Lateral = ½ × perimeter of base × slant height'],
          ],
        },
        {
          type: 'defs',
          items: [
            [
              'The one-third rule',
              'A cone has one-third the volume of a cylinder of the same base and height, and a pyramid has one-third the volume of a prism of the same base and height. Remembering this converts two formulas into none, and it also explains the shape of the formulas rather than leaving them arbitrary.',
            ],
            [
              'Slant height',
              'For a cone, l = √(r² + h²) — simply Pythagoras applied to the radius and the vertical height. Questions frequently give two of the three and expect you to find the third before using an area formula, and forgetting this step is a common source of lost marks.',
            ],
            [
              'Melting and recasting problems',
              'When a solid is melted and recast into another shape, the volume is unchanged while the surface area is not. Equate the two volumes and solve. The same logic applies to a cylinder of water poured into a conical vessel, or to spheres cut from a cube.',
            ],
            [
              'Frustum of a cone',
              'The portion left when the top of a cone is cut off parallel to the base. Its volume is (1/3)πh(R² + r² + Rr) and its curved surface area is πl(R + r), where l = √(h² + (R − r)²). It appears in SSC and CAT papers as the harder mensuration question.',
            ],
          ],
        },
      ],
    },

    /* ── 7 ─────────────────────────────────────────────────────── */
    {
      id: 'coordinate',
      heading: 'Coordinate geometry',
      eyebrow: 'Points, lines and distance',
      intro:
        'Geometry done with algebra. It carries substantial weight in JEE and appears in CAT and SSC as a compact, formula-driven block.',
      blocks: [
        {
          type: 'formula',
          title: 'Points and lines',
          items: [
            { expr: 'Distance = √[(x₂ − x₁)² + (y₂ − y₁)²]', note: 'Pythagoras on the coordinate difference.' },
            { expr: 'Midpoint = ((x₁ + x₂)/2, (y₁ + y₂)/2)', note: 'The average of the coordinates.' },
            { expr: 'Section formula: ((mx₂ + nx₁)/(m + n), (my₂ + ny₁)/(m + n))', note: 'For a point dividing the join in ratio m:n internally. Note the cross-pairing of subscripts.' },
            { expr: 'Slope m = (y₂ − y₁)/(x₂ − x₁)', note: 'Parallel lines have equal slopes; perpendicular lines have slopes whose product is −1.' },
            { expr: 'Area of a triangle = ½|x₁(y₂ − y₃) + x₂(y₃ − y₁) + x₃(y₁ − y₂)|', note: 'If the area comes out zero, the three points are collinear — which is how collinearity is tested.' },
            { expr: 'Line: y − y₁ = m(x − x₁), or y = mx + c, or x/a + y/b = 1', note: 'Point-slope, slope-intercept and intercept forms; the general form is ax + by + c = 0 with slope −a/b.' },
            { expr: 'Distance from (x₁, y₁) to ax + by + c = 0 is |ax₁ + by₁ + c| / √(a² + b²)', note: 'The perpendicular distance from a point to a line.' },
            { expr: 'Circle: (x − h)² + (y − k)² = r²', note: 'Centre (h, k) and radius r. The general form x² + y² + 2gx + 2fy + c = 0 has centre (−g, −f) and radius √(g² + f² − c).' },
          ],
        },
        {
          type: 'defs',
          items: [
            [
              'The centroid in coordinates',
              'The centroid of a triangle is simply the average of the three vertices: ((x₁+x₂+x₃)/3, (y₁+y₂+y₃)/3). This is far quicker than any geometric construction and is asked directly.',
            ],
            [
              'Conic sections',
              'The curves obtained by cutting a cone with a plane: circle, ellipse, parabola and hyperbola. Their standard equations, foci and eccentricities form a substantial JEE topic and rarely appear in aptitude papers. Eccentricity is 0 for a circle, between 0 and 1 for an ellipse, exactly 1 for a parabola and greater than 1 for a hyperbola.',
            ],
            [
              'Why coordinate geometry is worth the effort',
              'Because it converts a geometric configuration into algebra, where there is a definite procedure. A question about whether three points are collinear, or about the distance from a point to a line, has no obvious construction but a one-line coordinate solution. In JEE this is much of the point of the topic.',
            ],
          ],
        },
      ],
    },
  ],

  examples: [
    {
      q: 'The sides of a triangle are 13, 14 and 15. Find its area.',
      steps: [
        'No height is given, so use Heron\'s formula. The semi-perimeter s = (13 + 14 + 15)/2 = 21.',
        'Area = √[21 × (21−13) × (21−14) × (21−15)] = √(21 × 8 × 7 × 6).',
        '21 × 8 × 7 × 6 = 7056, and √7056 = 84.',
      ],
      answer: '84 square units.',
    },
    {
      q: 'Each side of a square is increased by 20%. By what percentage does its area increase?',
      steps: [
        'Area scales as the square of the linear dimension.',
        'The side is multiplied by 1.2, so the area is multiplied by 1.2² = 1.44.',
        'That is an increase of 0.44, or 44 per cent — not 40, which is the trap.',
      ],
      answer: '44 per cent.',
    },
    {
      q: 'A cone has radius 6 cm and height 8 cm. Find its total surface area.',
      steps: [
        'First find the slant height: l = √(r² + h²) = √(36 + 64) = √100 = 10 cm.',
        'Total surface area = πr(r + l) = π × 6 × (6 + 10).',
        '= 96π square centimetres, or about 301.6 cm².',
      ],
      answer: '96π cm², approximately 301.6 square centimetres.',
    },
    {
      q: 'A sphere of radius 3 cm is melted and recast into a cylinder of radius 3 cm. Find the cylinder\'s height.',
      steps: [
        'Melting conserves volume. Volume of the sphere = (4/3)πr³ = (4/3)π × 27 = 36π.',
        'Volume of the cylinder = πr²h = π × 9 × h.',
        'Setting them equal, 9h = 36, so h = 4 cm.',
      ],
      answer: '4 centimetres.',
    },
    {
      q: 'How many diagonals does a regular decagon have?',
      steps: [
        'The formula is n(n − 3)/2, since each vertex joins to n − 3 non-adjacent vertices and each diagonal is counted twice.',
        'For n = 10, that is 10 × 7 / 2.',
        '= 35.',
      ],
      answer: '35 diagonals.',
    },
    {
      q: 'Two similar triangles have corresponding sides in the ratio 3:5. Find the ratio of their areas.',
      steps: [
        'For similar figures, corresponding lengths scale by k and areas by k².',
        'Here k = 3/5, so the area ratio is (3/5)².',
        '= 9/25.',
      ],
      answer: '9:25.',
    },
    {
      q: 'Find the area of the triangle with vertices (1, 2), (4, 6) and (7, 2).',
      steps: [
        'Area = ½|x₁(y₂ − y₃) + x₂(y₃ − y₁) + x₃(y₁ − y₂)|.',
        '= ½|1(6 − 2) + 4(2 − 2) + 7(2 − 6)| = ½|4 + 0 − 28|.',
        '= ½ × 24 = 12.',
      ],
      answer: '12 square units.',
    },
    {
      q: 'A square is inscribed in a circle of radius 7 cm. Find the area of the square.',
      steps: [
        'The diagonal of the inscribed square is the diameter of the circle, so it is 14 cm.',
        'For a square of side a, the diagonal is a√2, so a√2 = 14 and a = 14/√2 = 7√2.',
        'Area = a² = 98 square centimetres. Equivalently, the area is 2r².',
      ],
      answer: '98 square centimetres.',
    },
  ],

  practice: [
    {
      q: 'The sum of the interior angles of a hexagon is:',
      options: ['540°', '720°', '900°', '1080°'],
      answer: 1,
      explain: '(n − 2) × 180° = 4 × 180° = 720°.',
    },
    {
      q: 'The area of an equilateral triangle of side 6 cm is:',
      options: ['9√3 cm²', '18√3 cm²', '36√3 cm²', '12√3 cm²'],
      answer: 0,
      explain: '(√3/4)a² = (√3/4) × 36 = 9√3.',
    },
    {
      q: 'The centroid divides each median in the ratio:',
      options: ['1:1', '1:2 from the vertex', '2:1 from the vertex', '3:1 from the vertex'],
      answer: 2,
      explain: 'The longer part is on the vertex side.',
    },
    {
      q: 'The volume of a cone is what fraction of the cylinder with the same base and height?',
      options: ['One half', 'One quarter', 'Two thirds', 'One third'],
      answer: 3,
      explain: 'The same one-third relation holds between a pyramid and a prism of equal base and height.',
    },
    {
      q: 'The angle in a semicircle is:',
      options: ['45°', '60°', '90°', '180°'],
      answer: 2,
      explain: 'A special case of the angle at the centre being twice the angle at the circumference.',
    },
    {
      q: 'The total surface area of a hemisphere of radius r is:',
      options: ['2πr²', 'πr²', '4πr²', '3πr²'],
      answer: 3,
      explain: 'The curved surface is 2πr² and the flat circular face adds πr².',
    },
    {
      q: 'The diagonal of a cube of edge a is:',
      options: ['a√2', '3a', '2a', 'a√3'],
      answer: 3,
      explain: 'From √(a² + a² + a²). The face diagonal, by contrast, is a√2.',
    },
    {
      q: 'Which is NOT a valid test for congruence of triangles?',
      options: ['SSS', 'SAS', 'SSA', 'RHS'],
      answer: 2,
      explain: 'Two sides and a non-included angle do not determine a triangle uniquely.',
    },
    {
      q: 'The sum of the exterior angles of any convex polygon is:',
      options: ['180°', '360°', '(n − 2)180°', 'It depends on n'],
      answer: 1,
      explain: '360° regardless of the number of sides, which is why each exterior angle of a regular n-gon is 360°/n.',
    },
    {
      q: 'The area of a rhombus with diagonals 10 cm and 24 cm is:',
      options: ['240 cm²', '120 cm²', '60 cm²', '480 cm²'],
      answer: 1,
      explain: '½ × d₁ × d₂ = ½ × 10 × 24 = 120.',
    },
    {
      q: 'Opposite angles of a cyclic quadrilateral are:',
      options: ['Equal', 'Complementary', 'Supplementary', 'Right angles'],
      answer: 2,
      explain: 'They sum to 180°, and an exterior angle equals the interior opposite angle.',
    },
    {
      q: 'The distance between (3, 4) and (0, 0) is:',
      options: ['3', '4', '5', '7'],
      answer: 2,
      explain: '√(9 + 16) = 5 — the 3-4-5 triple.',
    },
    {
      q: 'Two lines are perpendicular if the product of their slopes is:',
      options: ['0', '1', '−1', 'Undefined'],
      answer: 2,
      explain: 'Parallel lines instead have equal slopes.',
    },
    {
      q: 'If the radius of a circle is doubled, its area becomes:',
      options: ['Double', 'Three times', 'Four times', 'Eight times'],
      answer: 2,
      explain: 'Area scales as the square of the linear dimension; volume would scale as the cube.',
    },
    {
      q: 'A line parallel to one side of a triangle divides the other two sides:',
      options: ['Equally', 'In the same ratio', 'Perpendicularly', 'In the ratio 2:1'],
      answer: 1,
      explain: 'The basic proportionality theorem, also called Thales\'s theorem.',
    },
    {
      q: 'The slant height of a cone with radius 5 cm and height 12 cm is:',
      options: ['13 cm', '17 cm', '7 cm', '15 cm'],
      answer: 0,
      explain: '√(25 + 144) = 13 — the 5-12-13 triple.',
    },
  ],

  faqs: [
    {
      q: 'Why do so many candidates lose marks on scaling questions?',
      a: 'Because they scale the wrong power. If a linear dimension is multiplied by k, lengths scale by k, areas by k² and volumes by k³. A 20 per cent increase in the side of a square increases the area by 44 per cent, not 40, because 1.2 squared is 1.44. This single point accounts for a large share of the wrong answers in mensuration.',
    },
    {
      q: 'When should I use Heron\'s formula?',
      a: 'When all three sides are known and no height is. If a height or an included angle is given, ½ × base × height or ½ab sin C is quicker. Heron\'s formula involves a square root of a four-factor product, so it is the slowest of the three — reach for it only when the others are unavailable.',
    },
    {
      q: 'What is the difference between curved and total surface area?',
      a: 'The curved surface area covers only the curved part; the total adds the flat faces. For a cylinder, the curved surface is 2πrh and the total adds two circular ends. For a cone, the curved surface is πrl and the total adds one base. For a hemisphere, the curved surface is 2πr² and the total adds the flat circle. A sphere has no flat face, so the distinction does not arise. Read the question carefully — it always specifies which.',
    },
    {
      q: 'Why is SSA not a valid congruence test?',
      a: 'Because two sides and a non-included angle can produce two different triangles. Given the angle and the adjacent side, the opposite side of the specified length can often meet the third side in two distinct places, giving an acute and an obtuse solution. This is the ambiguous case. RHS works for right triangles because the right angle removes the ambiguity.',
    },
    {
      q: 'How do I remember the volume formulas?',
      a: 'Group them. A prism and a cylinder are both base area times height. A pyramid and a cone are both one-third of that, with the same base and height. A sphere is (4/3)πr³ and a hemisphere is half of it. That reduces eight formulas to three ideas plus two special cases, which is far more robust than eight separate memorised strings.',
    },
    {
      q: 'What is the fastest way to handle melting and recasting questions?',
      a: 'Write down the volume of the original shape, write down the volume of the new shape with the unknown in it, and set them equal. Volume is conserved; surface area is not, which is what makes such questions interesting. If several small objects are made from one large one, the total volume of the small ones equals the volume of the large.',
    },
    {
      q: 'How much coordinate geometry do aptitude exams need?',
      a: 'Not much — the distance, midpoint and section formulas, slope, the collinearity test through zero area, and the equation of a line. That covers essentially everything SSC, banking and CAT ask. Conic sections, tangents and normals, and the general second-degree equation belong to JEE, where coordinate geometry is a substantial and separate topic.',
    },
    {
      q: 'Which formulas are worth memorising above all others?',
      a: 'The equilateral triangle\'s area and height; Heron\'s formula; the circle\'s area and circumference; the cone\'s slant height and both surface areas; the sphere\'s volume and surface area; the polygon angle sum and diagonal count; and the coordinate distance and section formulas. Those two dozen expressions answer the great majority of geometry and mensuration questions across every exam.',
    },
    {
      q: 'Should I draw the figure even when one is given?',
      a: 'Redraw it if the given one is not to scale, and always draw it if none is given. Geometry questions are lost far more often to misread configurations than to missing formulas, and a clean sketch with the given values marked on it takes twenty seconds and prevents most such errors. Mark equal sides and equal angles as you establish them.',
    },
    {
      q: 'How many questions come from geometry and mensuration?',
      a: 'Five to eight in SSC CGL, making it one of the largest quantitative blocks; four to six in CAT; one to three in banking, mostly mensuration; two to four in RRB; and fifteen to twenty per cent of JEE mathematics, almost all of it coordinate geometry rather than plane geometry.',
    },
  ],

  related: [
    { label: 'Algebra', to: '/study-material/mathematics/algebra/' },
    { label: 'Trigonometry', to: '/study-material/mathematics/trigonometry/' },
    { label: 'Ratio & Proportion', to: '/study-material/quantitative-aptitude/ratio-proportion/' },
    { label: 'Quantitative Aptitude', to: '/study-material/quantitative-aptitude/' },
    { label: 'All Mathematics', to: '/study-material/mathematics/' },
  ],
}
