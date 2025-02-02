import type { Post } from '../types';

export const samplePosts: Post[] = [
  {
    id: '1',
    title: 'Domain-Driven Design: The Secret Sauce for Building Smart Software',
    slug: 'understanding-ddd',
    excerpt: 'Unlock the power of Domain-Driven Design (DDD) to create software that truly fits your business needs.',
    content: `## Introduction

Imagine trying to assemble a complex piece of furniture without a clear manual. Each part might be crafted perfectly, but without the right instructions, the final product could end up wobbly and dysfunctional. Similarly, in software development, without a clear understanding of the business domain, applications can become tangled, hard to maintain, and misaligned with what the business actually needs. This is where Domain-Driven Design (DDD) comes into play.

Whether you're a seasoned developer or just starting out, understanding DDD can transform the way you build software, making it more robust, scalable, and aligned with real-world business requirements.

## Why Should You Care About Domain-Driven Design (DDD)?

Embracing Domain-Driven Design isn't just about applying another development methodology—it's about creating software that truly serves the business. Here's why DDD matters:

### Alignment with Business Goals

- <strong>Target Real Problems</strong>: DDD ensures your software aligns with the business's core objectives, solving problems that truly matter.
- <strong>Focus on Value</strong>: By modeling your domain accurately, your solutions are laser-focused on driving value for stakeholders.

### Improved Communication

- <strong>Speak the Same Language</strong>: With a shared, ubiquitous language, DDD fosters seamless communication between developers and stakeholders.
- <strong>Minimize Misunderstandings</strong>: Clear terminology reduces confusion, ensuring everyone—from engineers to domain experts—is on the same page.

### Enhanced Maintainability

- <strong>Build Modular Systems</strong>: DDD's emphasis on well-defined bounded contexts leads to clean, modular codebases that are easier to manage.
- <strong>Adapt with Confidence</strong>: When business requirements evolve, you can make changes confidently without destabilizing the system.

### Scalability

- <strong>Future-Proof Design</strong>: DDD helps you create systems that scale effortlessly as your business grows and demands increase.
- <strong>Handle Complexity with Ease</strong>: Break down large, intricate domains into manageable contexts, allowing the system to handle increasing complexity gracefully.

## Core Concepts of Domain-Driven Design

### 1. Ubiquitous Language

A shared vocabulary between developers and domain experts, used consistently in:
- Conversations
- Documentation
- Code

> In an e-commerce platform, terms like "Order," "Customer," and "Inventory" become part of the ubiquitous language.

### 2. Entities

Objects with unique identities that persist over time:
- Defined by identity rather than attributes
- Maintain continuity throughout changes

Here's an example of an entity in C#:

\`\`\`csharp
public class Customer : Entity<CustomerId>
{
    public string Name { get; private set; }
    public Email Email { get; private set; }

    private Customer(CustomerId id, string name, Email email)
    {
        Id = id;
        Name = name;
        Email = email;
    }

    public static Customer Create(string name, Email email)
    {
        return new Customer(CustomerId.New(), name, email);
    }
}
\`\`\`

### 3. Value Objects

Immutable objects defined by their attributes:
- No unique identity
- Interchangeable if values match

\`\`\`csharp
public record Money
{
    public decimal Amount { get; }
    public string Currency { get; }

    private Money(decimal amount, string currency)
    {
        Amount = amount;
        Currency = currency;
    }

    public static Money Create(decimal amount, string currency)
    {
        if (amount < 0)
            throw new InvalidMoneyException("Amount must be non-negative.");
        
        return new Money(amount, currency);
    }
}
\`\`\`

### 4. Aggregates and Aggregate Roots

Groups of related objects treated as a unit:
- Aggregate Root controls access
- Ensures consistency
- Manages relationships

> An Order (aggregate root) containing multiple OrderItems is a perfect example of an aggregate.`,
    publishedAt: '2024-03-15',
    author: {
      name: 'John Doe',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop',
    },
    tags: ['DDD', 'Architecture', 'Best Practices'],
    category: 'Architecture',
    series: {
      id: '1',
      name: 'Domain-Driven Design',
      partNumber: 1,
      totalParts: 5,
    },
  },
  {
    id: '2',
    title: 'Aggregate in DDD: What, Why, How',
    slug: 'ddd-aggregates',
    excerpt: 'Master the concept of Aggregates in Domain-Driven Design and learn how to effectively implement them in your applications.',
    content: `## What Is an Aggregate Root in DDD?

In the complex world of software design, Domain-Driven Design (DDD) offers robust techniques to model and manage business complexity. One of the key constructs in DDD is the aggregate—a group of closely related domain objects treated as a single unit. At the heart of every aggregate is the aggregate root, which governs the consistency and validity of the entire group while enforcing business invariants.

In this article, we'll explain what an aggregate root is, why aggregates are essential, and how to design and implement one using modern C# and .NET. Along the way, we'll integrate best practices such as:

- <strong>Keeping Aggregates Small</strong>: Focus on core business invariants, avoid bloated models, and split aggregates when necessary.
- <strong>Designing for Eventual Consistency</strong>: Use domain events to manage cross-aggregate updates and accept that some operations might be eventually consistent.
- <strong>Protecting Invariants</strong>: Use private constructors, factory methods, and custom domain exceptions to validate state changes.
- <strong>Following DDD Principles</strong>: Implement a ubiquitous language, leverage value objects for immutable concepts, and raise domain events for important changes.

Imagine building an e-commerce system. An Order may include multiple items, shipping details, customer information, and more. In DDD, you group these details into one aggregate. The aggregate root—the Order in this case—is responsible for:

- <strong>Enforcing Invariants</strong>: It guarantees that business rules are honored. For example, the aggregate prevents adding the same product twice.
- <strong>Controlling Access</strong>: External components interact with the aggregate only through its root. This hides internal complexity and ensures that changes are coordinated.
- <strong>Raising Domain Events</strong>: When key events occur (like order creation or item addition), the aggregate root publishes events for other parts of the system to react to.

By serving as the single entry point, the aggregate root ensures that consistency boundaries are maintained and that domain logic remains centralized.

## Why Use Aggregates?

Aggregates are not merely theoretical constructs; they address real-world challenges by offering multiple benefits:

### 1. Consistency Boundaries

- <strong>Enforces Business Rules</strong>: Aggregates group related objects so that all modifications adhere to business invariants.
- <strong>Maintains Transaction Integrity</strong>: All changes are committed as a single transaction, ensuring that partial updates do not leave the system in an inconsistent state.
- <strong>Clear Boundaries</strong>: Aggregates define clear transactional and consistency boundaries within the domain.

### 2. Encapsulation

- <strong>Hides Internal Complexity</strong>: Only the aggregate root's public API is exposed, simplifying interactions for external systems.
- <strong>Prevents Invalid Changes</strong>: Controlled access ensures that internal objects cannot be modified arbitrarily.
- <strong>Reduces Coupling</strong>: By isolating internal details, aggregates allow the rest of the system to evolve independently.

### 3. Performance

- <strong>Optimizes Data Access</strong>: Aggregates can often be loaded in a single query, reducing database roundtrips.
- <strong>Minimizes Transaction Conflicts</strong>: Isolated aggregates lower the chance of concurrent update conflicts.
- <strong>Scalability</strong>: Smaller, well-defined aggregates improve overall system performance and scalability.

### 4. Domain Logic and Best Practices

- <strong>Centralizes Business Rules</strong>: The aggregate root becomes the single source of truth for the operations within its boundary.
- <strong>Keeps Aggregates Small</strong>: Focus on core invariants and avoid stuffing too many entities into one aggregate. If an aggregate grows too large, consider splitting it.
- <strong>Designs for Eventual Consistency</strong>: Use domain events for cross-aggregate updates where immediate consistency isn't required.
- <strong>Implements a Ubiquitous Language</strong>: The API of the aggregate should reflect the domain's language, making it easier for all stakeholders to understand.
- <strong>Protects Invariants</strong>: Private constructors, factory methods, and domain-specific exceptions ensure that only valid state changes occur.

## How to Create an Aggregate Root in C#

Let's build a practical example of an Order aggregate in C#. Our example will include:

- Value Objects: Implemented as records for immutability (e.g., Money), created only via factory methods.
- Strongly Typed Identifiers: OrderId and OrderItemId as records to enforce type safety.
- Domain Events: Publishing events such as OrderCreatedEvent when significant operations occur.
- Custom Domain Exceptions: Throwing meaningful exceptions like ProductAlreadyExistsException to signal errors.
- Controlled Instantiation: Ensuring that the Order aggregate and its child entity OrderItem are only created through factory methods with private constructors.

### 1. Value Objects and Strongly Typed Identifiers Using Records

First, let's create a Money value object using C# records to ensure immutability:

\`\`\`csharp
public record Money
{
    public decimal Amount { get; init; }
    public string Currency { get; init; }

    private Money(decimal amount, string currency)
    {
        Amount = amount;
        Currency = currency;
    }

    public static Money Create(decimal amount, string currency)
    {
        if (amount < 0)
            throw new InvalidMoneyException("Amount must be non-negative.");
        if (string.IsNullOrWhiteSpace(currency))
            throw new InvalidMoneyException("Currency cannot be null or empty.");

        return new Money(amount, currency);
    }
}
\`\`\`

For strongly typed identifiers:

\`\`\`csharp
public sealed record OrderId
{
    public Guid Value { get; }

    private OrderId(Guid value) => Value = value;

    public static OrderId New() => new OrderId(Guid.NewGuid());
}
\`\`\`

### 2. Domain Events

Domain events signal important changes in our aggregate:

\`\`\`csharp
public interface IDomainEvent
{
    DateTime OccurredOn { get; }
}

public class OrderCreatedEvent : IDomainEvent
{
    public Order Order { get; }
    public DateTime OccurredOn { get; }

    public OrderCreatedEvent(Order order)
    {
        Order = order;
        OccurredOn = DateTime.UtcNow;
    }
}
\`\`\`

### 3. Child Entity: OrderItem

The OrderItem is a child entity within the Order aggregate:

\`\`\`csharp
public class OrderItem : Entity
{
    public OrderItemId OrderItemId { get; private set; }
    public string ProductId { get; private set; }
    public int Quantity { get; private set; }
    public Money Price { get; private set; }

    private OrderItem(string productId, int quantity, Money price)
    {
        if (string.IsNullOrEmpty(productId))
            throw new InvalidOrderItemException("Product Id cannot be null or empty.");
        if (quantity <= 0)
            throw new InvalidOrderItemException("Quantity must be greater than zero.");

        OrderItemId = OrderItemId.New();
        ProductId = productId;
        Quantity = quantity;
        Price = price ?? throw new InvalidOrderItemException("Price cannot be null.");
    }

    public static OrderItem Create(string productId, int quantity, Money price)
    {
        return new OrderItem(productId, quantity, price);
    }
}
\`\`\`

### 4. Using the Aggregate

Here's how to use the Order aggregate in practice:

\`\`\`csharp
public class OrderService
{
    public void ProcessOrder()
    {
        // Create a new Order aggregate
        var order = Order.Create("customer-123");

        // Add items to the order using our factory methods
        order.AddItem("product-456", 2, Money.Create(29.99m, "USD"));
        order.AddItem("product-789", 1, Money.Create(59.99m, "USD"));

        // Persist the order using a repository (not shown here)
        // e.g., orderRepository.Save(order);

        // Dispatch domain events as needed
        foreach (var domainEvent in order.DomainEvents)
        {
            // Dispatch each event using your event dispatcher
        }
        order.ClearDomainEvents();
    }
}
\`\`\`

## Best Practices for Aggregate Design

1. Keep Aggregates Small
   - Focus on business invariants
   - Avoid including too many entities
   - Consider splitting large aggregates

2. Design for Eventual Consistency
   - Use domain events for cross-aggregate updates
   - Accept that some operations may be eventually consistent
   - Design boundaries based on business requirements

3. Protect Invariants
   - Use private constructors
   - Implement factory methods
   - Validate state changes
   - Throw domain-specific exceptions

4. Follow DDD Principles
   - Implement ubiquitous language
   - Focus on the domain
   - Use value objects for concepts without identity
   - Raise domain events for important changes

## Conclusion

Aggregates and aggregate roots are practical constructs that help manage complex business rules in a coherent, maintainable way. By leveraging modern C# features—such as records for immutable value objects, strongly typed identifiers, controlled instantiation via factory methods, and custom exceptions—we build a domain model that is both expressive and robust. Domain events further decouple parts of our system, making it easier to react to changes and maintain consistency.

Additionally, by following best practices such as keeping aggregates small, designing for eventual consistency, protecting invariants, and adhering to core DDD principles, you ensure that your domain model is both effective and adaptable. We hope this article helps you understand how to design and implement aggregates using DDD. Happy coding, and enjoy building systems that truly reflect your domain!`,
    publishedAt: '2024-03-16',
    author: {
      name: 'John Doe',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop',
    },
    tags: ['DDD', 'Best Practices'],
    category: 'Architecture',
    series: {
      id: '1',
      name: 'Domain-Driven Design',
      partNumber: 2,
      totalParts: 5,
    },
  },
  {
    id: '3',
    title: 'Event-Driven Architecture: Patterns and Best Practices',
    slug: 'event-driven-architecture',
    excerpt: 'Exploring the fundamentals of event-driven architecture and its implementation...',
    content: '...',
    publishedAt: '2024-03-14',
    author: {
      name: 'Jane Smith',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
    },
    tags: ['Event-Driven', 'Architecture', '.NET'],
    category: 'Architecture',
    series: {
      id: '2',
      name: 'Event-Driven Architecture',
      partNumber: 1,
      totalParts: 3,
    },
  },
  {
    id: '4',
    title: 'Microservices Communication Patterns',
    slug: 'microservices-communication',
    excerpt: 'Deep dive into various patterns for handling communication between microservices...',
    content: '...',
    publishedAt: '2024-03-13',
    author: {
      name: 'Mike Johnson',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop',
    },
    tags: ['Microservices', 'Architecture', 'API Design', 'Integration'],
    category: 'Architecture',
  },
  {
    id: '5',
    title: 'Advanced TypeScript Design Patterns',
    slug: 'typescript-patterns',
    excerpt: 'Exploring advanced TypeScript patterns and best practices for large-scale applications...',
    content: '...',
    publishedAt: '2024-03-12',
    author: {
      name: 'Sarah Wilson',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
    },
    tags: ['TypeScript', 'Design Patterns', 'JavaScript', 'Best Practices'],
    category: 'Development',
  },
  {
    id: '6',
    title: 'Building Scalable React Applications',
    slug: 'scalable-react',
    excerpt: 'Learn how to structure and scale your React applications for enterprise use...',
    content: '...',
    publishedAt: '2024-03-11',
    author: {
      name: 'Alex Chen',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
    },
    tags: ['React', 'JavaScript', 'Performance', 'Architecture'],
    category: 'Development',
  },
  {
    id: '7',
    title: 'Cloud Native Development Best Practices',
    slug: 'cloud-native-practices',
    excerpt: 'Essential practices for developing cloud-native applications...',
    content: '...',
    publishedAt: '2024-03-10',
    author: {
      name: 'Emma Davis',
      avatar: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100&h=100&fit=crop',
    },
    tags: ['Cloud', 'DevOps', 'Kubernetes', 'Docker'],
    category: 'DevOps',
  },
  {
    id: '8',
    title: 'GraphQL vs REST: Making the Right Choice',
    slug: 'graphql-vs-rest',
    excerpt: 'A comprehensive comparison of GraphQL and REST APIs for modern applications...',
    content: '...',
    publishedAt: '2024-03-09',
    author: {
      name: 'Tom Brown',
      avatar: 'https://images.unsplash.com/photo-1463453091185-61582044d556?w=100&h=100&fit=crop',
    },
    tags: ['GraphQL', 'REST', 'API Design', 'Backend'],
    category: 'Backend',
  }
];