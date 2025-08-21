Everybody has an intuitive idea of what it means for something to be reliable or unre‐
liable. For software, typical expectations include:
• The application performs the function that the user expected.
• It can tolerate the user making mistakes or using the software in unexpected
ways.
• Its performance is good enough for the required use case, under the expected
load and data volume.
• The system prevents any unauthorized access and abuse.
If all those things together mean “working correctly,” then we can understand relia‐
bility as meaning, roughly, “continuing to work correctly, even when things go
wrong.”

A fault is usually defined as one com‐
ponent of the system deviating from its spec, whereas a failure is when the system as a
whole stops providing the required service to the user
It is impossible to reduce the
probability of a fault to zero; therefore it is usually best to design fault-tolerance
mechanisms that prevent faults from causing failures.