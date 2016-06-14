const circleCircle = (m, a, b) => {
  const A = a.shape;
  const B = b.shape;
  const normal = b.position.sub(a.position);
  const dist_sqr = normal.lengthSq();
  const radius = A.radius + B.radius;
  if (dist_sqr >= radius * radius) {
    return;
  }
  const distance = Math.sqrt(dist_sqr);
  if (distance === 0) {
    m.penetration = A.radius;
    m.normal.set(1, 0);
    m.contacts[0] = a.position.clone();
  } else {
    m.penetration = radius - distance;
    m.normal.set(normal).divi(distance);
    m.contacts[0] = new Vec2(m.normal).muli(A.radius).addi(a.position);
  }
};
