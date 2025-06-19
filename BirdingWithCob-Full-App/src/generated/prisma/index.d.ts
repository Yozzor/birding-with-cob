
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Bird
 * 
 */
export type Bird = $Result.DefaultSelection<Prisma.$BirdPayload>
/**
 * Model UserSpotting
 * 
 */
export type UserSpotting = $Result.DefaultSelection<Prisma.$UserSpottingPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.bird`: Exposes CRUD operations for the **Bird** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Birds
    * const birds = await prisma.bird.findMany()
    * ```
    */
  get bird(): Prisma.BirdDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userSpotting`: Exposes CRUD operations for the **UserSpotting** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserSpottings
    * const userSpottings = await prisma.userSpotting.findMany()
    * ```
    */
  get userSpotting(): Prisma.UserSpottingDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.9.0
   * Query Engine version: 81e4af48011447c3cc503a190e86995b66d2a28e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Bird: 'Bird',
    UserSpotting: 'UserSpotting'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "bird" | "userSpotting"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Bird: {
        payload: Prisma.$BirdPayload<ExtArgs>
        fields: Prisma.BirdFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BirdFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BirdPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BirdFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BirdPayload>
          }
          findFirst: {
            args: Prisma.BirdFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BirdPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BirdFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BirdPayload>
          }
          findMany: {
            args: Prisma.BirdFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BirdPayload>[]
          }
          create: {
            args: Prisma.BirdCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BirdPayload>
          }
          createMany: {
            args: Prisma.BirdCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BirdCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BirdPayload>[]
          }
          delete: {
            args: Prisma.BirdDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BirdPayload>
          }
          update: {
            args: Prisma.BirdUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BirdPayload>
          }
          deleteMany: {
            args: Prisma.BirdDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BirdUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BirdUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BirdPayload>[]
          }
          upsert: {
            args: Prisma.BirdUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BirdPayload>
          }
          aggregate: {
            args: Prisma.BirdAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBird>
          }
          groupBy: {
            args: Prisma.BirdGroupByArgs<ExtArgs>
            result: $Utils.Optional<BirdGroupByOutputType>[]
          }
          count: {
            args: Prisma.BirdCountArgs<ExtArgs>
            result: $Utils.Optional<BirdCountAggregateOutputType> | number
          }
        }
      }
      UserSpotting: {
        payload: Prisma.$UserSpottingPayload<ExtArgs>
        fields: Prisma.UserSpottingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserSpottingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSpottingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserSpottingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSpottingPayload>
          }
          findFirst: {
            args: Prisma.UserSpottingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSpottingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserSpottingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSpottingPayload>
          }
          findMany: {
            args: Prisma.UserSpottingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSpottingPayload>[]
          }
          create: {
            args: Prisma.UserSpottingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSpottingPayload>
          }
          createMany: {
            args: Prisma.UserSpottingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserSpottingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSpottingPayload>[]
          }
          delete: {
            args: Prisma.UserSpottingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSpottingPayload>
          }
          update: {
            args: Prisma.UserSpottingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSpottingPayload>
          }
          deleteMany: {
            args: Prisma.UserSpottingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserSpottingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserSpottingUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSpottingPayload>[]
          }
          upsert: {
            args: Prisma.UserSpottingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSpottingPayload>
          }
          aggregate: {
            args: Prisma.UserSpottingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserSpotting>
          }
          groupBy: {
            args: Prisma.UserSpottingGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserSpottingGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserSpottingCountArgs<ExtArgs>
            result: $Utils.Optional<UserSpottingCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    bird?: BirdOmit
    userSpotting?: UserSpottingOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    spottings: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    spottings?: boolean | UserCountOutputTypeCountSpottingsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSpottingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserSpottingWhereInput
  }


  /**
   * Count Type BirdCountOutputType
   */

  export type BirdCountOutputType = {
    spottings: number
  }

  export type BirdCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    spottings?: boolean | BirdCountOutputTypeCountSpottingsArgs
  }

  // Custom InputTypes
  /**
   * BirdCountOutputType without action
   */
  export type BirdCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BirdCountOutputType
     */
    select?: BirdCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BirdCountOutputType without action
   */
  export type BirdCountOutputTypeCountSpottingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserSpottingWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    role: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    role: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    name: number
    role: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    name?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    name?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    name?: true
    role?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    name: string | null
    role: string
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    spottings?: boolean | User$spottingsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    name?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "name" | "role" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    spottings?: boolean | User$spottingsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      spottings: Prisma.$UserSpottingPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      name: string | null
      role: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    spottings<T extends User$spottingsArgs<ExtArgs> = {}>(args?: Subset<T, User$spottingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserSpottingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.spottings
   */
  export type User$spottingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSpotting
     */
    select?: UserSpottingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSpotting
     */
    omit?: UserSpottingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSpottingInclude<ExtArgs> | null
    where?: UserSpottingWhereInput
    orderBy?: UserSpottingOrderByWithRelationInput | UserSpottingOrderByWithRelationInput[]
    cursor?: UserSpottingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserSpottingScalarFieldEnum | UserSpottingScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Bird
   */

  export type AggregateBird = {
    _count: BirdCountAggregateOutputType | null
    _avg: BirdAvgAggregateOutputType | null
    _sum: BirdSumAggregateOutputType | null
    _min: BirdMinAggregateOutputType | null
    _max: BirdMaxAggregateOutputType | null
  }

  export type BirdAvgAggregateOutputType = {
    id: number | null
  }

  export type BirdSumAggregateOutputType = {
    id: number | null
  }

  export type BirdMinAggregateOutputType = {
    id: number | null
    name: string | null
    scientificName: string | null
    commonName: string | null
    type: string | null
    rarity: string | null
    habitat: string | null
    description: string | null
    imageUrl: string | null
    photoAttribution: string | null
    conservationStatus: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BirdMaxAggregateOutputType = {
    id: number | null
    name: string | null
    scientificName: string | null
    commonName: string | null
    type: string | null
    rarity: string | null
    habitat: string | null
    description: string | null
    imageUrl: string | null
    photoAttribution: string | null
    conservationStatus: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BirdCountAggregateOutputType = {
    id: number
    name: number
    scientificName: number
    commonName: number
    type: number
    rarity: number
    habitat: number
    description: number
    imageUrl: number
    photoAttribution: number
    conservationStatus: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type BirdAvgAggregateInputType = {
    id?: true
  }

  export type BirdSumAggregateInputType = {
    id?: true
  }

  export type BirdMinAggregateInputType = {
    id?: true
    name?: true
    scientificName?: true
    commonName?: true
    type?: true
    rarity?: true
    habitat?: true
    description?: true
    imageUrl?: true
    photoAttribution?: true
    conservationStatus?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BirdMaxAggregateInputType = {
    id?: true
    name?: true
    scientificName?: true
    commonName?: true
    type?: true
    rarity?: true
    habitat?: true
    description?: true
    imageUrl?: true
    photoAttribution?: true
    conservationStatus?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BirdCountAggregateInputType = {
    id?: true
    name?: true
    scientificName?: true
    commonName?: true
    type?: true
    rarity?: true
    habitat?: true
    description?: true
    imageUrl?: true
    photoAttribution?: true
    conservationStatus?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type BirdAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Bird to aggregate.
     */
    where?: BirdWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Birds to fetch.
     */
    orderBy?: BirdOrderByWithRelationInput | BirdOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BirdWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Birds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Birds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Birds
    **/
    _count?: true | BirdCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BirdAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BirdSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BirdMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BirdMaxAggregateInputType
  }

  export type GetBirdAggregateType<T extends BirdAggregateArgs> = {
        [P in keyof T & keyof AggregateBird]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBird[P]>
      : GetScalarType<T[P], AggregateBird[P]>
  }




  export type BirdGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BirdWhereInput
    orderBy?: BirdOrderByWithAggregationInput | BirdOrderByWithAggregationInput[]
    by: BirdScalarFieldEnum[] | BirdScalarFieldEnum
    having?: BirdScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BirdCountAggregateInputType | true
    _avg?: BirdAvgAggregateInputType
    _sum?: BirdSumAggregateInputType
    _min?: BirdMinAggregateInputType
    _max?: BirdMaxAggregateInputType
  }

  export type BirdGroupByOutputType = {
    id: number
    name: string
    scientificName: string
    commonName: string | null
    type: string | null
    rarity: string | null
    habitat: string | null
    description: string | null
    imageUrl: string | null
    photoAttribution: string | null
    conservationStatus: string | null
    createdAt: Date
    updatedAt: Date
    _count: BirdCountAggregateOutputType | null
    _avg: BirdAvgAggregateOutputType | null
    _sum: BirdSumAggregateOutputType | null
    _min: BirdMinAggregateOutputType | null
    _max: BirdMaxAggregateOutputType | null
  }

  type GetBirdGroupByPayload<T extends BirdGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BirdGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BirdGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BirdGroupByOutputType[P]>
            : GetScalarType<T[P], BirdGroupByOutputType[P]>
        }
      >
    >


  export type BirdSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    scientificName?: boolean
    commonName?: boolean
    type?: boolean
    rarity?: boolean
    habitat?: boolean
    description?: boolean
    imageUrl?: boolean
    photoAttribution?: boolean
    conservationStatus?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    spottings?: boolean | Bird$spottingsArgs<ExtArgs>
    _count?: boolean | BirdCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bird"]>

  export type BirdSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    scientificName?: boolean
    commonName?: boolean
    type?: boolean
    rarity?: boolean
    habitat?: boolean
    description?: boolean
    imageUrl?: boolean
    photoAttribution?: boolean
    conservationStatus?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["bird"]>

  export type BirdSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    scientificName?: boolean
    commonName?: boolean
    type?: boolean
    rarity?: boolean
    habitat?: boolean
    description?: boolean
    imageUrl?: boolean
    photoAttribution?: boolean
    conservationStatus?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["bird"]>

  export type BirdSelectScalar = {
    id?: boolean
    name?: boolean
    scientificName?: boolean
    commonName?: boolean
    type?: boolean
    rarity?: boolean
    habitat?: boolean
    description?: boolean
    imageUrl?: boolean
    photoAttribution?: boolean
    conservationStatus?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type BirdOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "scientificName" | "commonName" | "type" | "rarity" | "habitat" | "description" | "imageUrl" | "photoAttribution" | "conservationStatus" | "createdAt" | "updatedAt", ExtArgs["result"]["bird"]>
  export type BirdInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    spottings?: boolean | Bird$spottingsArgs<ExtArgs>
    _count?: boolean | BirdCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type BirdIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type BirdIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $BirdPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Bird"
    objects: {
      spottings: Prisma.$UserSpottingPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      scientificName: string
      commonName: string | null
      type: string | null
      rarity: string | null
      habitat: string | null
      description: string | null
      imageUrl: string | null
      photoAttribution: string | null
      conservationStatus: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["bird"]>
    composites: {}
  }

  type BirdGetPayload<S extends boolean | null | undefined | BirdDefaultArgs> = $Result.GetResult<Prisma.$BirdPayload, S>

  type BirdCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BirdFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BirdCountAggregateInputType | true
    }

  export interface BirdDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Bird'], meta: { name: 'Bird' } }
    /**
     * Find zero or one Bird that matches the filter.
     * @param {BirdFindUniqueArgs} args - Arguments to find a Bird
     * @example
     * // Get one Bird
     * const bird = await prisma.bird.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BirdFindUniqueArgs>(args: SelectSubset<T, BirdFindUniqueArgs<ExtArgs>>): Prisma__BirdClient<$Result.GetResult<Prisma.$BirdPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Bird that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BirdFindUniqueOrThrowArgs} args - Arguments to find a Bird
     * @example
     * // Get one Bird
     * const bird = await prisma.bird.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BirdFindUniqueOrThrowArgs>(args: SelectSubset<T, BirdFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BirdClient<$Result.GetResult<Prisma.$BirdPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Bird that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BirdFindFirstArgs} args - Arguments to find a Bird
     * @example
     * // Get one Bird
     * const bird = await prisma.bird.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BirdFindFirstArgs>(args?: SelectSubset<T, BirdFindFirstArgs<ExtArgs>>): Prisma__BirdClient<$Result.GetResult<Prisma.$BirdPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Bird that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BirdFindFirstOrThrowArgs} args - Arguments to find a Bird
     * @example
     * // Get one Bird
     * const bird = await prisma.bird.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BirdFindFirstOrThrowArgs>(args?: SelectSubset<T, BirdFindFirstOrThrowArgs<ExtArgs>>): Prisma__BirdClient<$Result.GetResult<Prisma.$BirdPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Birds that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BirdFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Birds
     * const birds = await prisma.bird.findMany()
     * 
     * // Get first 10 Birds
     * const birds = await prisma.bird.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const birdWithIdOnly = await prisma.bird.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BirdFindManyArgs>(args?: SelectSubset<T, BirdFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BirdPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Bird.
     * @param {BirdCreateArgs} args - Arguments to create a Bird.
     * @example
     * // Create one Bird
     * const Bird = await prisma.bird.create({
     *   data: {
     *     // ... data to create a Bird
     *   }
     * })
     * 
     */
    create<T extends BirdCreateArgs>(args: SelectSubset<T, BirdCreateArgs<ExtArgs>>): Prisma__BirdClient<$Result.GetResult<Prisma.$BirdPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Birds.
     * @param {BirdCreateManyArgs} args - Arguments to create many Birds.
     * @example
     * // Create many Birds
     * const bird = await prisma.bird.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BirdCreateManyArgs>(args?: SelectSubset<T, BirdCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Birds and returns the data saved in the database.
     * @param {BirdCreateManyAndReturnArgs} args - Arguments to create many Birds.
     * @example
     * // Create many Birds
     * const bird = await prisma.bird.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Birds and only return the `id`
     * const birdWithIdOnly = await prisma.bird.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BirdCreateManyAndReturnArgs>(args?: SelectSubset<T, BirdCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BirdPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Bird.
     * @param {BirdDeleteArgs} args - Arguments to delete one Bird.
     * @example
     * // Delete one Bird
     * const Bird = await prisma.bird.delete({
     *   where: {
     *     // ... filter to delete one Bird
     *   }
     * })
     * 
     */
    delete<T extends BirdDeleteArgs>(args: SelectSubset<T, BirdDeleteArgs<ExtArgs>>): Prisma__BirdClient<$Result.GetResult<Prisma.$BirdPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Bird.
     * @param {BirdUpdateArgs} args - Arguments to update one Bird.
     * @example
     * // Update one Bird
     * const bird = await prisma.bird.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BirdUpdateArgs>(args: SelectSubset<T, BirdUpdateArgs<ExtArgs>>): Prisma__BirdClient<$Result.GetResult<Prisma.$BirdPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Birds.
     * @param {BirdDeleteManyArgs} args - Arguments to filter Birds to delete.
     * @example
     * // Delete a few Birds
     * const { count } = await prisma.bird.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BirdDeleteManyArgs>(args?: SelectSubset<T, BirdDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Birds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BirdUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Birds
     * const bird = await prisma.bird.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BirdUpdateManyArgs>(args: SelectSubset<T, BirdUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Birds and returns the data updated in the database.
     * @param {BirdUpdateManyAndReturnArgs} args - Arguments to update many Birds.
     * @example
     * // Update many Birds
     * const bird = await prisma.bird.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Birds and only return the `id`
     * const birdWithIdOnly = await prisma.bird.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BirdUpdateManyAndReturnArgs>(args: SelectSubset<T, BirdUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BirdPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Bird.
     * @param {BirdUpsertArgs} args - Arguments to update or create a Bird.
     * @example
     * // Update or create a Bird
     * const bird = await prisma.bird.upsert({
     *   create: {
     *     // ... data to create a Bird
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Bird we want to update
     *   }
     * })
     */
    upsert<T extends BirdUpsertArgs>(args: SelectSubset<T, BirdUpsertArgs<ExtArgs>>): Prisma__BirdClient<$Result.GetResult<Prisma.$BirdPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Birds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BirdCountArgs} args - Arguments to filter Birds to count.
     * @example
     * // Count the number of Birds
     * const count = await prisma.bird.count({
     *   where: {
     *     // ... the filter for the Birds we want to count
     *   }
     * })
    **/
    count<T extends BirdCountArgs>(
      args?: Subset<T, BirdCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BirdCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Bird.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BirdAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BirdAggregateArgs>(args: Subset<T, BirdAggregateArgs>): Prisma.PrismaPromise<GetBirdAggregateType<T>>

    /**
     * Group by Bird.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BirdGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BirdGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BirdGroupByArgs['orderBy'] }
        : { orderBy?: BirdGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BirdGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBirdGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Bird model
   */
  readonly fields: BirdFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Bird.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BirdClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    spottings<T extends Bird$spottingsArgs<ExtArgs> = {}>(args?: Subset<T, Bird$spottingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserSpottingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Bird model
   */
  interface BirdFieldRefs {
    readonly id: FieldRef<"Bird", 'Int'>
    readonly name: FieldRef<"Bird", 'String'>
    readonly scientificName: FieldRef<"Bird", 'String'>
    readonly commonName: FieldRef<"Bird", 'String'>
    readonly type: FieldRef<"Bird", 'String'>
    readonly rarity: FieldRef<"Bird", 'String'>
    readonly habitat: FieldRef<"Bird", 'String'>
    readonly description: FieldRef<"Bird", 'String'>
    readonly imageUrl: FieldRef<"Bird", 'String'>
    readonly photoAttribution: FieldRef<"Bird", 'String'>
    readonly conservationStatus: FieldRef<"Bird", 'String'>
    readonly createdAt: FieldRef<"Bird", 'DateTime'>
    readonly updatedAt: FieldRef<"Bird", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Bird findUnique
   */
  export type BirdFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bird
     */
    select?: BirdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bird
     */
    omit?: BirdOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BirdInclude<ExtArgs> | null
    /**
     * Filter, which Bird to fetch.
     */
    where: BirdWhereUniqueInput
  }

  /**
   * Bird findUniqueOrThrow
   */
  export type BirdFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bird
     */
    select?: BirdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bird
     */
    omit?: BirdOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BirdInclude<ExtArgs> | null
    /**
     * Filter, which Bird to fetch.
     */
    where: BirdWhereUniqueInput
  }

  /**
   * Bird findFirst
   */
  export type BirdFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bird
     */
    select?: BirdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bird
     */
    omit?: BirdOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BirdInclude<ExtArgs> | null
    /**
     * Filter, which Bird to fetch.
     */
    where?: BirdWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Birds to fetch.
     */
    orderBy?: BirdOrderByWithRelationInput | BirdOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Birds.
     */
    cursor?: BirdWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Birds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Birds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Birds.
     */
    distinct?: BirdScalarFieldEnum | BirdScalarFieldEnum[]
  }

  /**
   * Bird findFirstOrThrow
   */
  export type BirdFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bird
     */
    select?: BirdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bird
     */
    omit?: BirdOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BirdInclude<ExtArgs> | null
    /**
     * Filter, which Bird to fetch.
     */
    where?: BirdWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Birds to fetch.
     */
    orderBy?: BirdOrderByWithRelationInput | BirdOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Birds.
     */
    cursor?: BirdWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Birds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Birds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Birds.
     */
    distinct?: BirdScalarFieldEnum | BirdScalarFieldEnum[]
  }

  /**
   * Bird findMany
   */
  export type BirdFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bird
     */
    select?: BirdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bird
     */
    omit?: BirdOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BirdInclude<ExtArgs> | null
    /**
     * Filter, which Birds to fetch.
     */
    where?: BirdWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Birds to fetch.
     */
    orderBy?: BirdOrderByWithRelationInput | BirdOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Birds.
     */
    cursor?: BirdWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Birds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Birds.
     */
    skip?: number
    distinct?: BirdScalarFieldEnum | BirdScalarFieldEnum[]
  }

  /**
   * Bird create
   */
  export type BirdCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bird
     */
    select?: BirdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bird
     */
    omit?: BirdOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BirdInclude<ExtArgs> | null
    /**
     * The data needed to create a Bird.
     */
    data: XOR<BirdCreateInput, BirdUncheckedCreateInput>
  }

  /**
   * Bird createMany
   */
  export type BirdCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Birds.
     */
    data: BirdCreateManyInput | BirdCreateManyInput[]
  }

  /**
   * Bird createManyAndReturn
   */
  export type BirdCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bird
     */
    select?: BirdSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Bird
     */
    omit?: BirdOmit<ExtArgs> | null
    /**
     * The data used to create many Birds.
     */
    data: BirdCreateManyInput | BirdCreateManyInput[]
  }

  /**
   * Bird update
   */
  export type BirdUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bird
     */
    select?: BirdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bird
     */
    omit?: BirdOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BirdInclude<ExtArgs> | null
    /**
     * The data needed to update a Bird.
     */
    data: XOR<BirdUpdateInput, BirdUncheckedUpdateInput>
    /**
     * Choose, which Bird to update.
     */
    where: BirdWhereUniqueInput
  }

  /**
   * Bird updateMany
   */
  export type BirdUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Birds.
     */
    data: XOR<BirdUpdateManyMutationInput, BirdUncheckedUpdateManyInput>
    /**
     * Filter which Birds to update
     */
    where?: BirdWhereInput
    /**
     * Limit how many Birds to update.
     */
    limit?: number
  }

  /**
   * Bird updateManyAndReturn
   */
  export type BirdUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bird
     */
    select?: BirdSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Bird
     */
    omit?: BirdOmit<ExtArgs> | null
    /**
     * The data used to update Birds.
     */
    data: XOR<BirdUpdateManyMutationInput, BirdUncheckedUpdateManyInput>
    /**
     * Filter which Birds to update
     */
    where?: BirdWhereInput
    /**
     * Limit how many Birds to update.
     */
    limit?: number
  }

  /**
   * Bird upsert
   */
  export type BirdUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bird
     */
    select?: BirdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bird
     */
    omit?: BirdOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BirdInclude<ExtArgs> | null
    /**
     * The filter to search for the Bird to update in case it exists.
     */
    where: BirdWhereUniqueInput
    /**
     * In case the Bird found by the `where` argument doesn't exist, create a new Bird with this data.
     */
    create: XOR<BirdCreateInput, BirdUncheckedCreateInput>
    /**
     * In case the Bird was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BirdUpdateInput, BirdUncheckedUpdateInput>
  }

  /**
   * Bird delete
   */
  export type BirdDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bird
     */
    select?: BirdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bird
     */
    omit?: BirdOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BirdInclude<ExtArgs> | null
    /**
     * Filter which Bird to delete.
     */
    where: BirdWhereUniqueInput
  }

  /**
   * Bird deleteMany
   */
  export type BirdDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Birds to delete
     */
    where?: BirdWhereInput
    /**
     * Limit how many Birds to delete.
     */
    limit?: number
  }

  /**
   * Bird.spottings
   */
  export type Bird$spottingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSpotting
     */
    select?: UserSpottingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSpotting
     */
    omit?: UserSpottingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSpottingInclude<ExtArgs> | null
    where?: UserSpottingWhereInput
    orderBy?: UserSpottingOrderByWithRelationInput | UserSpottingOrderByWithRelationInput[]
    cursor?: UserSpottingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserSpottingScalarFieldEnum | UserSpottingScalarFieldEnum[]
  }

  /**
   * Bird without action
   */
  export type BirdDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bird
     */
    select?: BirdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bird
     */
    omit?: BirdOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BirdInclude<ExtArgs> | null
  }


  /**
   * Model UserSpotting
   */

  export type AggregateUserSpotting = {
    _count: UserSpottingCountAggregateOutputType | null
    _avg: UserSpottingAvgAggregateOutputType | null
    _sum: UserSpottingSumAggregateOutputType | null
    _min: UserSpottingMinAggregateOutputType | null
    _max: UserSpottingMaxAggregateOutputType | null
  }

  export type UserSpottingAvgAggregateOutputType = {
    birdId: number | null
    latitude: number | null
    longitude: number | null
  }

  export type UserSpottingSumAggregateOutputType = {
    birdId: number | null
    latitude: number | null
    longitude: number | null
  }

  export type UserSpottingMinAggregateOutputType = {
    id: string | null
    userId: string | null
    birdId: number | null
    latitude: number | null
    longitude: number | null
    location: string | null
    notes: string | null
    userPhoto: string | null
    confidence: string | null
    spottedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserSpottingMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    birdId: number | null
    latitude: number | null
    longitude: number | null
    location: string | null
    notes: string | null
    userPhoto: string | null
    confidence: string | null
    spottedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserSpottingCountAggregateOutputType = {
    id: number
    userId: number
    birdId: number
    latitude: number
    longitude: number
    location: number
    notes: number
    userPhoto: number
    confidence: number
    spottedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserSpottingAvgAggregateInputType = {
    birdId?: true
    latitude?: true
    longitude?: true
  }

  export type UserSpottingSumAggregateInputType = {
    birdId?: true
    latitude?: true
    longitude?: true
  }

  export type UserSpottingMinAggregateInputType = {
    id?: true
    userId?: true
    birdId?: true
    latitude?: true
    longitude?: true
    location?: true
    notes?: true
    userPhoto?: true
    confidence?: true
    spottedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserSpottingMaxAggregateInputType = {
    id?: true
    userId?: true
    birdId?: true
    latitude?: true
    longitude?: true
    location?: true
    notes?: true
    userPhoto?: true
    confidence?: true
    spottedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserSpottingCountAggregateInputType = {
    id?: true
    userId?: true
    birdId?: true
    latitude?: true
    longitude?: true
    location?: true
    notes?: true
    userPhoto?: true
    confidence?: true
    spottedAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserSpottingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserSpotting to aggregate.
     */
    where?: UserSpottingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserSpottings to fetch.
     */
    orderBy?: UserSpottingOrderByWithRelationInput | UserSpottingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserSpottingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserSpottings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserSpottings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserSpottings
    **/
    _count?: true | UserSpottingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserSpottingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSpottingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserSpottingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserSpottingMaxAggregateInputType
  }

  export type GetUserSpottingAggregateType<T extends UserSpottingAggregateArgs> = {
        [P in keyof T & keyof AggregateUserSpotting]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserSpotting[P]>
      : GetScalarType<T[P], AggregateUserSpotting[P]>
  }




  export type UserSpottingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserSpottingWhereInput
    orderBy?: UserSpottingOrderByWithAggregationInput | UserSpottingOrderByWithAggregationInput[]
    by: UserSpottingScalarFieldEnum[] | UserSpottingScalarFieldEnum
    having?: UserSpottingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserSpottingCountAggregateInputType | true
    _avg?: UserSpottingAvgAggregateInputType
    _sum?: UserSpottingSumAggregateInputType
    _min?: UserSpottingMinAggregateInputType
    _max?: UserSpottingMaxAggregateInputType
  }

  export type UserSpottingGroupByOutputType = {
    id: string
    userId: string
    birdId: number
    latitude: number
    longitude: number
    location: string | null
    notes: string | null
    userPhoto: string | null
    confidence: string | null
    spottedAt: Date
    createdAt: Date
    updatedAt: Date
    _count: UserSpottingCountAggregateOutputType | null
    _avg: UserSpottingAvgAggregateOutputType | null
    _sum: UserSpottingSumAggregateOutputType | null
    _min: UserSpottingMinAggregateOutputType | null
    _max: UserSpottingMaxAggregateOutputType | null
  }

  type GetUserSpottingGroupByPayload<T extends UserSpottingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserSpottingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserSpottingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserSpottingGroupByOutputType[P]>
            : GetScalarType<T[P], UserSpottingGroupByOutputType[P]>
        }
      >
    >


  export type UserSpottingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    birdId?: boolean
    latitude?: boolean
    longitude?: boolean
    location?: boolean
    notes?: boolean
    userPhoto?: boolean
    confidence?: boolean
    spottedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    bird?: boolean | BirdDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userSpotting"]>

  export type UserSpottingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    birdId?: boolean
    latitude?: boolean
    longitude?: boolean
    location?: boolean
    notes?: boolean
    userPhoto?: boolean
    confidence?: boolean
    spottedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    bird?: boolean | BirdDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userSpotting"]>

  export type UserSpottingSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    birdId?: boolean
    latitude?: boolean
    longitude?: boolean
    location?: boolean
    notes?: boolean
    userPhoto?: boolean
    confidence?: boolean
    spottedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    bird?: boolean | BirdDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userSpotting"]>

  export type UserSpottingSelectScalar = {
    id?: boolean
    userId?: boolean
    birdId?: boolean
    latitude?: boolean
    longitude?: boolean
    location?: boolean
    notes?: boolean
    userPhoto?: boolean
    confidence?: boolean
    spottedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserSpottingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "birdId" | "latitude" | "longitude" | "location" | "notes" | "userPhoto" | "confidence" | "spottedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["userSpotting"]>
  export type UserSpottingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    bird?: boolean | BirdDefaultArgs<ExtArgs>
  }
  export type UserSpottingIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    bird?: boolean | BirdDefaultArgs<ExtArgs>
  }
  export type UserSpottingIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    bird?: boolean | BirdDefaultArgs<ExtArgs>
  }

  export type $UserSpottingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserSpotting"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      bird: Prisma.$BirdPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      birdId: number
      latitude: number
      longitude: number
      location: string | null
      notes: string | null
      userPhoto: string | null
      confidence: string | null
      spottedAt: Date
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["userSpotting"]>
    composites: {}
  }

  type UserSpottingGetPayload<S extends boolean | null | undefined | UserSpottingDefaultArgs> = $Result.GetResult<Prisma.$UserSpottingPayload, S>

  type UserSpottingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserSpottingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserSpottingCountAggregateInputType | true
    }

  export interface UserSpottingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserSpotting'], meta: { name: 'UserSpotting' } }
    /**
     * Find zero or one UserSpotting that matches the filter.
     * @param {UserSpottingFindUniqueArgs} args - Arguments to find a UserSpotting
     * @example
     * // Get one UserSpotting
     * const userSpotting = await prisma.userSpotting.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserSpottingFindUniqueArgs>(args: SelectSubset<T, UserSpottingFindUniqueArgs<ExtArgs>>): Prisma__UserSpottingClient<$Result.GetResult<Prisma.$UserSpottingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserSpotting that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserSpottingFindUniqueOrThrowArgs} args - Arguments to find a UserSpotting
     * @example
     * // Get one UserSpotting
     * const userSpotting = await prisma.userSpotting.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserSpottingFindUniqueOrThrowArgs>(args: SelectSubset<T, UserSpottingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserSpottingClient<$Result.GetResult<Prisma.$UserSpottingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserSpotting that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSpottingFindFirstArgs} args - Arguments to find a UserSpotting
     * @example
     * // Get one UserSpotting
     * const userSpotting = await prisma.userSpotting.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserSpottingFindFirstArgs>(args?: SelectSubset<T, UserSpottingFindFirstArgs<ExtArgs>>): Prisma__UserSpottingClient<$Result.GetResult<Prisma.$UserSpottingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserSpotting that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSpottingFindFirstOrThrowArgs} args - Arguments to find a UserSpotting
     * @example
     * // Get one UserSpotting
     * const userSpotting = await prisma.userSpotting.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserSpottingFindFirstOrThrowArgs>(args?: SelectSubset<T, UserSpottingFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserSpottingClient<$Result.GetResult<Prisma.$UserSpottingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserSpottings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSpottingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserSpottings
     * const userSpottings = await prisma.userSpotting.findMany()
     * 
     * // Get first 10 UserSpottings
     * const userSpottings = await prisma.userSpotting.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userSpottingWithIdOnly = await prisma.userSpotting.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserSpottingFindManyArgs>(args?: SelectSubset<T, UserSpottingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserSpottingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserSpotting.
     * @param {UserSpottingCreateArgs} args - Arguments to create a UserSpotting.
     * @example
     * // Create one UserSpotting
     * const UserSpotting = await prisma.userSpotting.create({
     *   data: {
     *     // ... data to create a UserSpotting
     *   }
     * })
     * 
     */
    create<T extends UserSpottingCreateArgs>(args: SelectSubset<T, UserSpottingCreateArgs<ExtArgs>>): Prisma__UserSpottingClient<$Result.GetResult<Prisma.$UserSpottingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserSpottings.
     * @param {UserSpottingCreateManyArgs} args - Arguments to create many UserSpottings.
     * @example
     * // Create many UserSpottings
     * const userSpotting = await prisma.userSpotting.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserSpottingCreateManyArgs>(args?: SelectSubset<T, UserSpottingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserSpottings and returns the data saved in the database.
     * @param {UserSpottingCreateManyAndReturnArgs} args - Arguments to create many UserSpottings.
     * @example
     * // Create many UserSpottings
     * const userSpotting = await prisma.userSpotting.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserSpottings and only return the `id`
     * const userSpottingWithIdOnly = await prisma.userSpotting.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserSpottingCreateManyAndReturnArgs>(args?: SelectSubset<T, UserSpottingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserSpottingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserSpotting.
     * @param {UserSpottingDeleteArgs} args - Arguments to delete one UserSpotting.
     * @example
     * // Delete one UserSpotting
     * const UserSpotting = await prisma.userSpotting.delete({
     *   where: {
     *     // ... filter to delete one UserSpotting
     *   }
     * })
     * 
     */
    delete<T extends UserSpottingDeleteArgs>(args: SelectSubset<T, UserSpottingDeleteArgs<ExtArgs>>): Prisma__UserSpottingClient<$Result.GetResult<Prisma.$UserSpottingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserSpotting.
     * @param {UserSpottingUpdateArgs} args - Arguments to update one UserSpotting.
     * @example
     * // Update one UserSpotting
     * const userSpotting = await prisma.userSpotting.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserSpottingUpdateArgs>(args: SelectSubset<T, UserSpottingUpdateArgs<ExtArgs>>): Prisma__UserSpottingClient<$Result.GetResult<Prisma.$UserSpottingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserSpottings.
     * @param {UserSpottingDeleteManyArgs} args - Arguments to filter UserSpottings to delete.
     * @example
     * // Delete a few UserSpottings
     * const { count } = await prisma.userSpotting.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserSpottingDeleteManyArgs>(args?: SelectSubset<T, UserSpottingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserSpottings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSpottingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserSpottings
     * const userSpotting = await prisma.userSpotting.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserSpottingUpdateManyArgs>(args: SelectSubset<T, UserSpottingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserSpottings and returns the data updated in the database.
     * @param {UserSpottingUpdateManyAndReturnArgs} args - Arguments to update many UserSpottings.
     * @example
     * // Update many UserSpottings
     * const userSpotting = await prisma.userSpotting.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserSpottings and only return the `id`
     * const userSpottingWithIdOnly = await prisma.userSpotting.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserSpottingUpdateManyAndReturnArgs>(args: SelectSubset<T, UserSpottingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserSpottingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserSpotting.
     * @param {UserSpottingUpsertArgs} args - Arguments to update or create a UserSpotting.
     * @example
     * // Update or create a UserSpotting
     * const userSpotting = await prisma.userSpotting.upsert({
     *   create: {
     *     // ... data to create a UserSpotting
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserSpotting we want to update
     *   }
     * })
     */
    upsert<T extends UserSpottingUpsertArgs>(args: SelectSubset<T, UserSpottingUpsertArgs<ExtArgs>>): Prisma__UserSpottingClient<$Result.GetResult<Prisma.$UserSpottingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserSpottings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSpottingCountArgs} args - Arguments to filter UserSpottings to count.
     * @example
     * // Count the number of UserSpottings
     * const count = await prisma.userSpotting.count({
     *   where: {
     *     // ... the filter for the UserSpottings we want to count
     *   }
     * })
    **/
    count<T extends UserSpottingCountArgs>(
      args?: Subset<T, UserSpottingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserSpottingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserSpotting.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSpottingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserSpottingAggregateArgs>(args: Subset<T, UserSpottingAggregateArgs>): Prisma.PrismaPromise<GetUserSpottingAggregateType<T>>

    /**
     * Group by UserSpotting.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSpottingGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserSpottingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserSpottingGroupByArgs['orderBy'] }
        : { orderBy?: UserSpottingGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserSpottingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserSpottingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserSpotting model
   */
  readonly fields: UserSpottingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserSpotting.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserSpottingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    bird<T extends BirdDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BirdDefaultArgs<ExtArgs>>): Prisma__BirdClient<$Result.GetResult<Prisma.$BirdPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserSpotting model
   */
  interface UserSpottingFieldRefs {
    readonly id: FieldRef<"UserSpotting", 'String'>
    readonly userId: FieldRef<"UserSpotting", 'String'>
    readonly birdId: FieldRef<"UserSpotting", 'Int'>
    readonly latitude: FieldRef<"UserSpotting", 'Float'>
    readonly longitude: FieldRef<"UserSpotting", 'Float'>
    readonly location: FieldRef<"UserSpotting", 'String'>
    readonly notes: FieldRef<"UserSpotting", 'String'>
    readonly userPhoto: FieldRef<"UserSpotting", 'String'>
    readonly confidence: FieldRef<"UserSpotting", 'String'>
    readonly spottedAt: FieldRef<"UserSpotting", 'DateTime'>
    readonly createdAt: FieldRef<"UserSpotting", 'DateTime'>
    readonly updatedAt: FieldRef<"UserSpotting", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserSpotting findUnique
   */
  export type UserSpottingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSpotting
     */
    select?: UserSpottingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSpotting
     */
    omit?: UserSpottingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSpottingInclude<ExtArgs> | null
    /**
     * Filter, which UserSpotting to fetch.
     */
    where: UserSpottingWhereUniqueInput
  }

  /**
   * UserSpotting findUniqueOrThrow
   */
  export type UserSpottingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSpotting
     */
    select?: UserSpottingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSpotting
     */
    omit?: UserSpottingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSpottingInclude<ExtArgs> | null
    /**
     * Filter, which UserSpotting to fetch.
     */
    where: UserSpottingWhereUniqueInput
  }

  /**
   * UserSpotting findFirst
   */
  export type UserSpottingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSpotting
     */
    select?: UserSpottingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSpotting
     */
    omit?: UserSpottingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSpottingInclude<ExtArgs> | null
    /**
     * Filter, which UserSpotting to fetch.
     */
    where?: UserSpottingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserSpottings to fetch.
     */
    orderBy?: UserSpottingOrderByWithRelationInput | UserSpottingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserSpottings.
     */
    cursor?: UserSpottingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserSpottings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserSpottings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserSpottings.
     */
    distinct?: UserSpottingScalarFieldEnum | UserSpottingScalarFieldEnum[]
  }

  /**
   * UserSpotting findFirstOrThrow
   */
  export type UserSpottingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSpotting
     */
    select?: UserSpottingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSpotting
     */
    omit?: UserSpottingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSpottingInclude<ExtArgs> | null
    /**
     * Filter, which UserSpotting to fetch.
     */
    where?: UserSpottingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserSpottings to fetch.
     */
    orderBy?: UserSpottingOrderByWithRelationInput | UserSpottingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserSpottings.
     */
    cursor?: UserSpottingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserSpottings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserSpottings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserSpottings.
     */
    distinct?: UserSpottingScalarFieldEnum | UserSpottingScalarFieldEnum[]
  }

  /**
   * UserSpotting findMany
   */
  export type UserSpottingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSpotting
     */
    select?: UserSpottingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSpotting
     */
    omit?: UserSpottingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSpottingInclude<ExtArgs> | null
    /**
     * Filter, which UserSpottings to fetch.
     */
    where?: UserSpottingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserSpottings to fetch.
     */
    orderBy?: UserSpottingOrderByWithRelationInput | UserSpottingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserSpottings.
     */
    cursor?: UserSpottingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserSpottings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserSpottings.
     */
    skip?: number
    distinct?: UserSpottingScalarFieldEnum | UserSpottingScalarFieldEnum[]
  }

  /**
   * UserSpotting create
   */
  export type UserSpottingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSpotting
     */
    select?: UserSpottingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSpotting
     */
    omit?: UserSpottingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSpottingInclude<ExtArgs> | null
    /**
     * The data needed to create a UserSpotting.
     */
    data: XOR<UserSpottingCreateInput, UserSpottingUncheckedCreateInput>
  }

  /**
   * UserSpotting createMany
   */
  export type UserSpottingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserSpottings.
     */
    data: UserSpottingCreateManyInput | UserSpottingCreateManyInput[]
  }

  /**
   * UserSpotting createManyAndReturn
   */
  export type UserSpottingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSpotting
     */
    select?: UserSpottingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserSpotting
     */
    omit?: UserSpottingOmit<ExtArgs> | null
    /**
     * The data used to create many UserSpottings.
     */
    data: UserSpottingCreateManyInput | UserSpottingCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSpottingIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserSpotting update
   */
  export type UserSpottingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSpotting
     */
    select?: UserSpottingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSpotting
     */
    omit?: UserSpottingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSpottingInclude<ExtArgs> | null
    /**
     * The data needed to update a UserSpotting.
     */
    data: XOR<UserSpottingUpdateInput, UserSpottingUncheckedUpdateInput>
    /**
     * Choose, which UserSpotting to update.
     */
    where: UserSpottingWhereUniqueInput
  }

  /**
   * UserSpotting updateMany
   */
  export type UserSpottingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserSpottings.
     */
    data: XOR<UserSpottingUpdateManyMutationInput, UserSpottingUncheckedUpdateManyInput>
    /**
     * Filter which UserSpottings to update
     */
    where?: UserSpottingWhereInput
    /**
     * Limit how many UserSpottings to update.
     */
    limit?: number
  }

  /**
   * UserSpotting updateManyAndReturn
   */
  export type UserSpottingUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSpotting
     */
    select?: UserSpottingSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserSpotting
     */
    omit?: UserSpottingOmit<ExtArgs> | null
    /**
     * The data used to update UserSpottings.
     */
    data: XOR<UserSpottingUpdateManyMutationInput, UserSpottingUncheckedUpdateManyInput>
    /**
     * Filter which UserSpottings to update
     */
    where?: UserSpottingWhereInput
    /**
     * Limit how many UserSpottings to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSpottingIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserSpotting upsert
   */
  export type UserSpottingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSpotting
     */
    select?: UserSpottingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSpotting
     */
    omit?: UserSpottingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSpottingInclude<ExtArgs> | null
    /**
     * The filter to search for the UserSpotting to update in case it exists.
     */
    where: UserSpottingWhereUniqueInput
    /**
     * In case the UserSpotting found by the `where` argument doesn't exist, create a new UserSpotting with this data.
     */
    create: XOR<UserSpottingCreateInput, UserSpottingUncheckedCreateInput>
    /**
     * In case the UserSpotting was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserSpottingUpdateInput, UserSpottingUncheckedUpdateInput>
  }

  /**
   * UserSpotting delete
   */
  export type UserSpottingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSpotting
     */
    select?: UserSpottingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSpotting
     */
    omit?: UserSpottingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSpottingInclude<ExtArgs> | null
    /**
     * Filter which UserSpotting to delete.
     */
    where: UserSpottingWhereUniqueInput
  }

  /**
   * UserSpotting deleteMany
   */
  export type UserSpottingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserSpottings to delete
     */
    where?: UserSpottingWhereInput
    /**
     * Limit how many UserSpottings to delete.
     */
    limit?: number
  }

  /**
   * UserSpotting without action
   */
  export type UserSpottingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSpotting
     */
    select?: UserSpottingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSpotting
     */
    omit?: UserSpottingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSpottingInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    name: 'name',
    role: 'role',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const BirdScalarFieldEnum: {
    id: 'id',
    name: 'name',
    scientificName: 'scientificName',
    commonName: 'commonName',
    type: 'type',
    rarity: 'rarity',
    habitat: 'habitat',
    description: 'description',
    imageUrl: 'imageUrl',
    photoAttribution: 'photoAttribution',
    conservationStatus: 'conservationStatus',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type BirdScalarFieldEnum = (typeof BirdScalarFieldEnum)[keyof typeof BirdScalarFieldEnum]


  export const UserSpottingScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    birdId: 'birdId',
    latitude: 'latitude',
    longitude: 'longitude',
    location: 'location',
    notes: 'notes',
    userPhoto: 'userPhoto',
    confidence: 'confidence',
    spottedAt: 'spottedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserSpottingScalarFieldEnum = (typeof UserSpottingScalarFieldEnum)[keyof typeof UserSpottingScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    role?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    spottings?: UserSpottingListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    spottings?: UserSpottingOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    role?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    spottings?: UserSpottingListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    role?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type BirdWhereInput = {
    AND?: BirdWhereInput | BirdWhereInput[]
    OR?: BirdWhereInput[]
    NOT?: BirdWhereInput | BirdWhereInput[]
    id?: IntFilter<"Bird"> | number
    name?: StringFilter<"Bird"> | string
    scientificName?: StringFilter<"Bird"> | string
    commonName?: StringNullableFilter<"Bird"> | string | null
    type?: StringNullableFilter<"Bird"> | string | null
    rarity?: StringNullableFilter<"Bird"> | string | null
    habitat?: StringNullableFilter<"Bird"> | string | null
    description?: StringNullableFilter<"Bird"> | string | null
    imageUrl?: StringNullableFilter<"Bird"> | string | null
    photoAttribution?: StringNullableFilter<"Bird"> | string | null
    conservationStatus?: StringNullableFilter<"Bird"> | string | null
    createdAt?: DateTimeFilter<"Bird"> | Date | string
    updatedAt?: DateTimeFilter<"Bird"> | Date | string
    spottings?: UserSpottingListRelationFilter
  }

  export type BirdOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    scientificName?: SortOrder
    commonName?: SortOrderInput | SortOrder
    type?: SortOrderInput | SortOrder
    rarity?: SortOrderInput | SortOrder
    habitat?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    imageUrl?: SortOrderInput | SortOrder
    photoAttribution?: SortOrderInput | SortOrder
    conservationStatus?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    spottings?: UserSpottingOrderByRelationAggregateInput
  }

  export type BirdWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: BirdWhereInput | BirdWhereInput[]
    OR?: BirdWhereInput[]
    NOT?: BirdWhereInput | BirdWhereInput[]
    name?: StringFilter<"Bird"> | string
    scientificName?: StringFilter<"Bird"> | string
    commonName?: StringNullableFilter<"Bird"> | string | null
    type?: StringNullableFilter<"Bird"> | string | null
    rarity?: StringNullableFilter<"Bird"> | string | null
    habitat?: StringNullableFilter<"Bird"> | string | null
    description?: StringNullableFilter<"Bird"> | string | null
    imageUrl?: StringNullableFilter<"Bird"> | string | null
    photoAttribution?: StringNullableFilter<"Bird"> | string | null
    conservationStatus?: StringNullableFilter<"Bird"> | string | null
    createdAt?: DateTimeFilter<"Bird"> | Date | string
    updatedAt?: DateTimeFilter<"Bird"> | Date | string
    spottings?: UserSpottingListRelationFilter
  }, "id">

  export type BirdOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    scientificName?: SortOrder
    commonName?: SortOrderInput | SortOrder
    type?: SortOrderInput | SortOrder
    rarity?: SortOrderInput | SortOrder
    habitat?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    imageUrl?: SortOrderInput | SortOrder
    photoAttribution?: SortOrderInput | SortOrder
    conservationStatus?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: BirdCountOrderByAggregateInput
    _avg?: BirdAvgOrderByAggregateInput
    _max?: BirdMaxOrderByAggregateInput
    _min?: BirdMinOrderByAggregateInput
    _sum?: BirdSumOrderByAggregateInput
  }

  export type BirdScalarWhereWithAggregatesInput = {
    AND?: BirdScalarWhereWithAggregatesInput | BirdScalarWhereWithAggregatesInput[]
    OR?: BirdScalarWhereWithAggregatesInput[]
    NOT?: BirdScalarWhereWithAggregatesInput | BirdScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Bird"> | number
    name?: StringWithAggregatesFilter<"Bird"> | string
    scientificName?: StringWithAggregatesFilter<"Bird"> | string
    commonName?: StringNullableWithAggregatesFilter<"Bird"> | string | null
    type?: StringNullableWithAggregatesFilter<"Bird"> | string | null
    rarity?: StringNullableWithAggregatesFilter<"Bird"> | string | null
    habitat?: StringNullableWithAggregatesFilter<"Bird"> | string | null
    description?: StringNullableWithAggregatesFilter<"Bird"> | string | null
    imageUrl?: StringNullableWithAggregatesFilter<"Bird"> | string | null
    photoAttribution?: StringNullableWithAggregatesFilter<"Bird"> | string | null
    conservationStatus?: StringNullableWithAggregatesFilter<"Bird"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Bird"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Bird"> | Date | string
  }

  export type UserSpottingWhereInput = {
    AND?: UserSpottingWhereInput | UserSpottingWhereInput[]
    OR?: UserSpottingWhereInput[]
    NOT?: UserSpottingWhereInput | UserSpottingWhereInput[]
    id?: StringFilter<"UserSpotting"> | string
    userId?: StringFilter<"UserSpotting"> | string
    birdId?: IntFilter<"UserSpotting"> | number
    latitude?: FloatFilter<"UserSpotting"> | number
    longitude?: FloatFilter<"UserSpotting"> | number
    location?: StringNullableFilter<"UserSpotting"> | string | null
    notes?: StringNullableFilter<"UserSpotting"> | string | null
    userPhoto?: StringNullableFilter<"UserSpotting"> | string | null
    confidence?: StringNullableFilter<"UserSpotting"> | string | null
    spottedAt?: DateTimeFilter<"UserSpotting"> | Date | string
    createdAt?: DateTimeFilter<"UserSpotting"> | Date | string
    updatedAt?: DateTimeFilter<"UserSpotting"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    bird?: XOR<BirdScalarRelationFilter, BirdWhereInput>
  }

  export type UserSpottingOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    birdId?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    location?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    userPhoto?: SortOrderInput | SortOrder
    confidence?: SortOrderInput | SortOrder
    spottedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    bird?: BirdOrderByWithRelationInput
  }

  export type UserSpottingWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: UserSpottingWhereInput | UserSpottingWhereInput[]
    OR?: UserSpottingWhereInput[]
    NOT?: UserSpottingWhereInput | UserSpottingWhereInput[]
    userId?: StringFilter<"UserSpotting"> | string
    birdId?: IntFilter<"UserSpotting"> | number
    latitude?: FloatFilter<"UserSpotting"> | number
    longitude?: FloatFilter<"UserSpotting"> | number
    location?: StringNullableFilter<"UserSpotting"> | string | null
    notes?: StringNullableFilter<"UserSpotting"> | string | null
    userPhoto?: StringNullableFilter<"UserSpotting"> | string | null
    confidence?: StringNullableFilter<"UserSpotting"> | string | null
    spottedAt?: DateTimeFilter<"UserSpotting"> | Date | string
    createdAt?: DateTimeFilter<"UserSpotting"> | Date | string
    updatedAt?: DateTimeFilter<"UserSpotting"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    bird?: XOR<BirdScalarRelationFilter, BirdWhereInput>
  }, "id">

  export type UserSpottingOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    birdId?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    location?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    userPhoto?: SortOrderInput | SortOrder
    confidence?: SortOrderInput | SortOrder
    spottedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserSpottingCountOrderByAggregateInput
    _avg?: UserSpottingAvgOrderByAggregateInput
    _max?: UserSpottingMaxOrderByAggregateInput
    _min?: UserSpottingMinOrderByAggregateInput
    _sum?: UserSpottingSumOrderByAggregateInput
  }

  export type UserSpottingScalarWhereWithAggregatesInput = {
    AND?: UserSpottingScalarWhereWithAggregatesInput | UserSpottingScalarWhereWithAggregatesInput[]
    OR?: UserSpottingScalarWhereWithAggregatesInput[]
    NOT?: UserSpottingScalarWhereWithAggregatesInput | UserSpottingScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserSpotting"> | string
    userId?: StringWithAggregatesFilter<"UserSpotting"> | string
    birdId?: IntWithAggregatesFilter<"UserSpotting"> | number
    latitude?: FloatWithAggregatesFilter<"UserSpotting"> | number
    longitude?: FloatWithAggregatesFilter<"UserSpotting"> | number
    location?: StringNullableWithAggregatesFilter<"UserSpotting"> | string | null
    notes?: StringNullableWithAggregatesFilter<"UserSpotting"> | string | null
    userPhoto?: StringNullableWithAggregatesFilter<"UserSpotting"> | string | null
    confidence?: StringNullableWithAggregatesFilter<"UserSpotting"> | string | null
    spottedAt?: DateTimeWithAggregatesFilter<"UserSpotting"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"UserSpotting"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"UserSpotting"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    name?: string | null
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    spottings?: UserSpottingCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    name?: string | null
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    spottings?: UserSpottingUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    spottings?: UserSpottingUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    spottings?: UserSpottingUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    name?: string | null
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BirdCreateInput = {
    id: number
    name: string
    scientificName: string
    commonName?: string | null
    type?: string | null
    rarity?: string | null
    habitat?: string | null
    description?: string | null
    imageUrl?: string | null
    photoAttribution?: string | null
    conservationStatus?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    spottings?: UserSpottingCreateNestedManyWithoutBirdInput
  }

  export type BirdUncheckedCreateInput = {
    id: number
    name: string
    scientificName: string
    commonName?: string | null
    type?: string | null
    rarity?: string | null
    habitat?: string | null
    description?: string | null
    imageUrl?: string | null
    photoAttribution?: string | null
    conservationStatus?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    spottings?: UserSpottingUncheckedCreateNestedManyWithoutBirdInput
  }

  export type BirdUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    scientificName?: StringFieldUpdateOperationsInput | string
    commonName?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    rarity?: NullableStringFieldUpdateOperationsInput | string | null
    habitat?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    photoAttribution?: NullableStringFieldUpdateOperationsInput | string | null
    conservationStatus?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    spottings?: UserSpottingUpdateManyWithoutBirdNestedInput
  }

  export type BirdUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    scientificName?: StringFieldUpdateOperationsInput | string
    commonName?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    rarity?: NullableStringFieldUpdateOperationsInput | string | null
    habitat?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    photoAttribution?: NullableStringFieldUpdateOperationsInput | string | null
    conservationStatus?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    spottings?: UserSpottingUncheckedUpdateManyWithoutBirdNestedInput
  }

  export type BirdCreateManyInput = {
    id: number
    name: string
    scientificName: string
    commonName?: string | null
    type?: string | null
    rarity?: string | null
    habitat?: string | null
    description?: string | null
    imageUrl?: string | null
    photoAttribution?: string | null
    conservationStatus?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BirdUpdateManyMutationInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    scientificName?: StringFieldUpdateOperationsInput | string
    commonName?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    rarity?: NullableStringFieldUpdateOperationsInput | string | null
    habitat?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    photoAttribution?: NullableStringFieldUpdateOperationsInput | string | null
    conservationStatus?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BirdUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    scientificName?: StringFieldUpdateOperationsInput | string
    commonName?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    rarity?: NullableStringFieldUpdateOperationsInput | string | null
    habitat?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    photoAttribution?: NullableStringFieldUpdateOperationsInput | string | null
    conservationStatus?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserSpottingCreateInput = {
    id?: string
    latitude: number
    longitude: number
    location?: string | null
    notes?: string | null
    userPhoto?: string | null
    confidence?: string | null
    spottedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutSpottingsInput
    bird: BirdCreateNestedOneWithoutSpottingsInput
  }

  export type UserSpottingUncheckedCreateInput = {
    id?: string
    userId: string
    birdId: number
    latitude: number
    longitude: number
    location?: string | null
    notes?: string | null
    userPhoto?: string | null
    confidence?: string | null
    spottedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserSpottingUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    location?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    userPhoto?: NullableStringFieldUpdateOperationsInput | string | null
    confidence?: NullableStringFieldUpdateOperationsInput | string | null
    spottedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSpottingsNestedInput
    bird?: BirdUpdateOneRequiredWithoutSpottingsNestedInput
  }

  export type UserSpottingUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    birdId?: IntFieldUpdateOperationsInput | number
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    location?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    userPhoto?: NullableStringFieldUpdateOperationsInput | string | null
    confidence?: NullableStringFieldUpdateOperationsInput | string | null
    spottedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserSpottingCreateManyInput = {
    id?: string
    userId: string
    birdId: number
    latitude: number
    longitude: number
    location?: string | null
    notes?: string | null
    userPhoto?: string | null
    confidence?: string | null
    spottedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserSpottingUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    location?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    userPhoto?: NullableStringFieldUpdateOperationsInput | string | null
    confidence?: NullableStringFieldUpdateOperationsInput | string | null
    spottedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserSpottingUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    birdId?: IntFieldUpdateOperationsInput | number
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    location?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    userPhoto?: NullableStringFieldUpdateOperationsInput | string | null
    confidence?: NullableStringFieldUpdateOperationsInput | string | null
    spottedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type UserSpottingListRelationFilter = {
    every?: UserSpottingWhereInput
    some?: UserSpottingWhereInput
    none?: UserSpottingWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UserSpottingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type BirdCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    scientificName?: SortOrder
    commonName?: SortOrder
    type?: SortOrder
    rarity?: SortOrder
    habitat?: SortOrder
    description?: SortOrder
    imageUrl?: SortOrder
    photoAttribution?: SortOrder
    conservationStatus?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BirdAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BirdMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    scientificName?: SortOrder
    commonName?: SortOrder
    type?: SortOrder
    rarity?: SortOrder
    habitat?: SortOrder
    description?: SortOrder
    imageUrl?: SortOrder
    photoAttribution?: SortOrder
    conservationStatus?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BirdMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    scientificName?: SortOrder
    commonName?: SortOrder
    type?: SortOrder
    rarity?: SortOrder
    habitat?: SortOrder
    description?: SortOrder
    imageUrl?: SortOrder
    photoAttribution?: SortOrder
    conservationStatus?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BirdSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type BirdScalarRelationFilter = {
    is?: BirdWhereInput
    isNot?: BirdWhereInput
  }

  export type UserSpottingCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    birdId?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    location?: SortOrder
    notes?: SortOrder
    userPhoto?: SortOrder
    confidence?: SortOrder
    spottedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSpottingAvgOrderByAggregateInput = {
    birdId?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type UserSpottingMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    birdId?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    location?: SortOrder
    notes?: SortOrder
    userPhoto?: SortOrder
    confidence?: SortOrder
    spottedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSpottingMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    birdId?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    location?: SortOrder
    notes?: SortOrder
    userPhoto?: SortOrder
    confidence?: SortOrder
    spottedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSpottingSumOrderByAggregateInput = {
    birdId?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type UserSpottingCreateNestedManyWithoutUserInput = {
    create?: XOR<UserSpottingCreateWithoutUserInput, UserSpottingUncheckedCreateWithoutUserInput> | UserSpottingCreateWithoutUserInput[] | UserSpottingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserSpottingCreateOrConnectWithoutUserInput | UserSpottingCreateOrConnectWithoutUserInput[]
    createMany?: UserSpottingCreateManyUserInputEnvelope
    connect?: UserSpottingWhereUniqueInput | UserSpottingWhereUniqueInput[]
  }

  export type UserSpottingUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserSpottingCreateWithoutUserInput, UserSpottingUncheckedCreateWithoutUserInput> | UserSpottingCreateWithoutUserInput[] | UserSpottingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserSpottingCreateOrConnectWithoutUserInput | UserSpottingCreateOrConnectWithoutUserInput[]
    createMany?: UserSpottingCreateManyUserInputEnvelope
    connect?: UserSpottingWhereUniqueInput | UserSpottingWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserSpottingUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserSpottingCreateWithoutUserInput, UserSpottingUncheckedCreateWithoutUserInput> | UserSpottingCreateWithoutUserInput[] | UserSpottingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserSpottingCreateOrConnectWithoutUserInput | UserSpottingCreateOrConnectWithoutUserInput[]
    upsert?: UserSpottingUpsertWithWhereUniqueWithoutUserInput | UserSpottingUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserSpottingCreateManyUserInputEnvelope
    set?: UserSpottingWhereUniqueInput | UserSpottingWhereUniqueInput[]
    disconnect?: UserSpottingWhereUniqueInput | UserSpottingWhereUniqueInput[]
    delete?: UserSpottingWhereUniqueInput | UserSpottingWhereUniqueInput[]
    connect?: UserSpottingWhereUniqueInput | UserSpottingWhereUniqueInput[]
    update?: UserSpottingUpdateWithWhereUniqueWithoutUserInput | UserSpottingUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserSpottingUpdateManyWithWhereWithoutUserInput | UserSpottingUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserSpottingScalarWhereInput | UserSpottingScalarWhereInput[]
  }

  export type UserSpottingUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserSpottingCreateWithoutUserInput, UserSpottingUncheckedCreateWithoutUserInput> | UserSpottingCreateWithoutUserInput[] | UserSpottingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserSpottingCreateOrConnectWithoutUserInput | UserSpottingCreateOrConnectWithoutUserInput[]
    upsert?: UserSpottingUpsertWithWhereUniqueWithoutUserInput | UserSpottingUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserSpottingCreateManyUserInputEnvelope
    set?: UserSpottingWhereUniqueInput | UserSpottingWhereUniqueInput[]
    disconnect?: UserSpottingWhereUniqueInput | UserSpottingWhereUniqueInput[]
    delete?: UserSpottingWhereUniqueInput | UserSpottingWhereUniqueInput[]
    connect?: UserSpottingWhereUniqueInput | UserSpottingWhereUniqueInput[]
    update?: UserSpottingUpdateWithWhereUniqueWithoutUserInput | UserSpottingUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserSpottingUpdateManyWithWhereWithoutUserInput | UserSpottingUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserSpottingScalarWhereInput | UserSpottingScalarWhereInput[]
  }

  export type UserSpottingCreateNestedManyWithoutBirdInput = {
    create?: XOR<UserSpottingCreateWithoutBirdInput, UserSpottingUncheckedCreateWithoutBirdInput> | UserSpottingCreateWithoutBirdInput[] | UserSpottingUncheckedCreateWithoutBirdInput[]
    connectOrCreate?: UserSpottingCreateOrConnectWithoutBirdInput | UserSpottingCreateOrConnectWithoutBirdInput[]
    createMany?: UserSpottingCreateManyBirdInputEnvelope
    connect?: UserSpottingWhereUniqueInput | UserSpottingWhereUniqueInput[]
  }

  export type UserSpottingUncheckedCreateNestedManyWithoutBirdInput = {
    create?: XOR<UserSpottingCreateWithoutBirdInput, UserSpottingUncheckedCreateWithoutBirdInput> | UserSpottingCreateWithoutBirdInput[] | UserSpottingUncheckedCreateWithoutBirdInput[]
    connectOrCreate?: UserSpottingCreateOrConnectWithoutBirdInput | UserSpottingCreateOrConnectWithoutBirdInput[]
    createMany?: UserSpottingCreateManyBirdInputEnvelope
    connect?: UserSpottingWhereUniqueInput | UserSpottingWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserSpottingUpdateManyWithoutBirdNestedInput = {
    create?: XOR<UserSpottingCreateWithoutBirdInput, UserSpottingUncheckedCreateWithoutBirdInput> | UserSpottingCreateWithoutBirdInput[] | UserSpottingUncheckedCreateWithoutBirdInput[]
    connectOrCreate?: UserSpottingCreateOrConnectWithoutBirdInput | UserSpottingCreateOrConnectWithoutBirdInput[]
    upsert?: UserSpottingUpsertWithWhereUniqueWithoutBirdInput | UserSpottingUpsertWithWhereUniqueWithoutBirdInput[]
    createMany?: UserSpottingCreateManyBirdInputEnvelope
    set?: UserSpottingWhereUniqueInput | UserSpottingWhereUniqueInput[]
    disconnect?: UserSpottingWhereUniqueInput | UserSpottingWhereUniqueInput[]
    delete?: UserSpottingWhereUniqueInput | UserSpottingWhereUniqueInput[]
    connect?: UserSpottingWhereUniqueInput | UserSpottingWhereUniqueInput[]
    update?: UserSpottingUpdateWithWhereUniqueWithoutBirdInput | UserSpottingUpdateWithWhereUniqueWithoutBirdInput[]
    updateMany?: UserSpottingUpdateManyWithWhereWithoutBirdInput | UserSpottingUpdateManyWithWhereWithoutBirdInput[]
    deleteMany?: UserSpottingScalarWhereInput | UserSpottingScalarWhereInput[]
  }

  export type UserSpottingUncheckedUpdateManyWithoutBirdNestedInput = {
    create?: XOR<UserSpottingCreateWithoutBirdInput, UserSpottingUncheckedCreateWithoutBirdInput> | UserSpottingCreateWithoutBirdInput[] | UserSpottingUncheckedCreateWithoutBirdInput[]
    connectOrCreate?: UserSpottingCreateOrConnectWithoutBirdInput | UserSpottingCreateOrConnectWithoutBirdInput[]
    upsert?: UserSpottingUpsertWithWhereUniqueWithoutBirdInput | UserSpottingUpsertWithWhereUniqueWithoutBirdInput[]
    createMany?: UserSpottingCreateManyBirdInputEnvelope
    set?: UserSpottingWhereUniqueInput | UserSpottingWhereUniqueInput[]
    disconnect?: UserSpottingWhereUniqueInput | UserSpottingWhereUniqueInput[]
    delete?: UserSpottingWhereUniqueInput | UserSpottingWhereUniqueInput[]
    connect?: UserSpottingWhereUniqueInput | UserSpottingWhereUniqueInput[]
    update?: UserSpottingUpdateWithWhereUniqueWithoutBirdInput | UserSpottingUpdateWithWhereUniqueWithoutBirdInput[]
    updateMany?: UserSpottingUpdateManyWithWhereWithoutBirdInput | UserSpottingUpdateManyWithWhereWithoutBirdInput[]
    deleteMany?: UserSpottingScalarWhereInput | UserSpottingScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutSpottingsInput = {
    create?: XOR<UserCreateWithoutSpottingsInput, UserUncheckedCreateWithoutSpottingsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSpottingsInput
    connect?: UserWhereUniqueInput
  }

  export type BirdCreateNestedOneWithoutSpottingsInput = {
    create?: XOR<BirdCreateWithoutSpottingsInput, BirdUncheckedCreateWithoutSpottingsInput>
    connectOrCreate?: BirdCreateOrConnectWithoutSpottingsInput
    connect?: BirdWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutSpottingsNestedInput = {
    create?: XOR<UserCreateWithoutSpottingsInput, UserUncheckedCreateWithoutSpottingsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSpottingsInput
    upsert?: UserUpsertWithoutSpottingsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSpottingsInput, UserUpdateWithoutSpottingsInput>, UserUncheckedUpdateWithoutSpottingsInput>
  }

  export type BirdUpdateOneRequiredWithoutSpottingsNestedInput = {
    create?: XOR<BirdCreateWithoutSpottingsInput, BirdUncheckedCreateWithoutSpottingsInput>
    connectOrCreate?: BirdCreateOrConnectWithoutSpottingsInput
    upsert?: BirdUpsertWithoutSpottingsInput
    connect?: BirdWhereUniqueInput
    update?: XOR<XOR<BirdUpdateToOneWithWhereWithoutSpottingsInput, BirdUpdateWithoutSpottingsInput>, BirdUncheckedUpdateWithoutSpottingsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type UserSpottingCreateWithoutUserInput = {
    id?: string
    latitude: number
    longitude: number
    location?: string | null
    notes?: string | null
    userPhoto?: string | null
    confidence?: string | null
    spottedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    bird: BirdCreateNestedOneWithoutSpottingsInput
  }

  export type UserSpottingUncheckedCreateWithoutUserInput = {
    id?: string
    birdId: number
    latitude: number
    longitude: number
    location?: string | null
    notes?: string | null
    userPhoto?: string | null
    confidence?: string | null
    spottedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserSpottingCreateOrConnectWithoutUserInput = {
    where: UserSpottingWhereUniqueInput
    create: XOR<UserSpottingCreateWithoutUserInput, UserSpottingUncheckedCreateWithoutUserInput>
  }

  export type UserSpottingCreateManyUserInputEnvelope = {
    data: UserSpottingCreateManyUserInput | UserSpottingCreateManyUserInput[]
  }

  export type UserSpottingUpsertWithWhereUniqueWithoutUserInput = {
    where: UserSpottingWhereUniqueInput
    update: XOR<UserSpottingUpdateWithoutUserInput, UserSpottingUncheckedUpdateWithoutUserInput>
    create: XOR<UserSpottingCreateWithoutUserInput, UserSpottingUncheckedCreateWithoutUserInput>
  }

  export type UserSpottingUpdateWithWhereUniqueWithoutUserInput = {
    where: UserSpottingWhereUniqueInput
    data: XOR<UserSpottingUpdateWithoutUserInput, UserSpottingUncheckedUpdateWithoutUserInput>
  }

  export type UserSpottingUpdateManyWithWhereWithoutUserInput = {
    where: UserSpottingScalarWhereInput
    data: XOR<UserSpottingUpdateManyMutationInput, UserSpottingUncheckedUpdateManyWithoutUserInput>
  }

  export type UserSpottingScalarWhereInput = {
    AND?: UserSpottingScalarWhereInput | UserSpottingScalarWhereInput[]
    OR?: UserSpottingScalarWhereInput[]
    NOT?: UserSpottingScalarWhereInput | UserSpottingScalarWhereInput[]
    id?: StringFilter<"UserSpotting"> | string
    userId?: StringFilter<"UserSpotting"> | string
    birdId?: IntFilter<"UserSpotting"> | number
    latitude?: FloatFilter<"UserSpotting"> | number
    longitude?: FloatFilter<"UserSpotting"> | number
    location?: StringNullableFilter<"UserSpotting"> | string | null
    notes?: StringNullableFilter<"UserSpotting"> | string | null
    userPhoto?: StringNullableFilter<"UserSpotting"> | string | null
    confidence?: StringNullableFilter<"UserSpotting"> | string | null
    spottedAt?: DateTimeFilter<"UserSpotting"> | Date | string
    createdAt?: DateTimeFilter<"UserSpotting"> | Date | string
    updatedAt?: DateTimeFilter<"UserSpotting"> | Date | string
  }

  export type UserSpottingCreateWithoutBirdInput = {
    id?: string
    latitude: number
    longitude: number
    location?: string | null
    notes?: string | null
    userPhoto?: string | null
    confidence?: string | null
    spottedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutSpottingsInput
  }

  export type UserSpottingUncheckedCreateWithoutBirdInput = {
    id?: string
    userId: string
    latitude: number
    longitude: number
    location?: string | null
    notes?: string | null
    userPhoto?: string | null
    confidence?: string | null
    spottedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserSpottingCreateOrConnectWithoutBirdInput = {
    where: UserSpottingWhereUniqueInput
    create: XOR<UserSpottingCreateWithoutBirdInput, UserSpottingUncheckedCreateWithoutBirdInput>
  }

  export type UserSpottingCreateManyBirdInputEnvelope = {
    data: UserSpottingCreateManyBirdInput | UserSpottingCreateManyBirdInput[]
  }

  export type UserSpottingUpsertWithWhereUniqueWithoutBirdInput = {
    where: UserSpottingWhereUniqueInput
    update: XOR<UserSpottingUpdateWithoutBirdInput, UserSpottingUncheckedUpdateWithoutBirdInput>
    create: XOR<UserSpottingCreateWithoutBirdInput, UserSpottingUncheckedCreateWithoutBirdInput>
  }

  export type UserSpottingUpdateWithWhereUniqueWithoutBirdInput = {
    where: UserSpottingWhereUniqueInput
    data: XOR<UserSpottingUpdateWithoutBirdInput, UserSpottingUncheckedUpdateWithoutBirdInput>
  }

  export type UserSpottingUpdateManyWithWhereWithoutBirdInput = {
    where: UserSpottingScalarWhereInput
    data: XOR<UserSpottingUpdateManyMutationInput, UserSpottingUncheckedUpdateManyWithoutBirdInput>
  }

  export type UserCreateWithoutSpottingsInput = {
    id?: string
    email: string
    name?: string | null
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUncheckedCreateWithoutSpottingsInput = {
    id?: string
    email: string
    name?: string | null
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserCreateOrConnectWithoutSpottingsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSpottingsInput, UserUncheckedCreateWithoutSpottingsInput>
  }

  export type BirdCreateWithoutSpottingsInput = {
    id: number
    name: string
    scientificName: string
    commonName?: string | null
    type?: string | null
    rarity?: string | null
    habitat?: string | null
    description?: string | null
    imageUrl?: string | null
    photoAttribution?: string | null
    conservationStatus?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BirdUncheckedCreateWithoutSpottingsInput = {
    id: number
    name: string
    scientificName: string
    commonName?: string | null
    type?: string | null
    rarity?: string | null
    habitat?: string | null
    description?: string | null
    imageUrl?: string | null
    photoAttribution?: string | null
    conservationStatus?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BirdCreateOrConnectWithoutSpottingsInput = {
    where: BirdWhereUniqueInput
    create: XOR<BirdCreateWithoutSpottingsInput, BirdUncheckedCreateWithoutSpottingsInput>
  }

  export type UserUpsertWithoutSpottingsInput = {
    update: XOR<UserUpdateWithoutSpottingsInput, UserUncheckedUpdateWithoutSpottingsInput>
    create: XOR<UserCreateWithoutSpottingsInput, UserUncheckedCreateWithoutSpottingsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSpottingsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSpottingsInput, UserUncheckedUpdateWithoutSpottingsInput>
  }

  export type UserUpdateWithoutSpottingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateWithoutSpottingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BirdUpsertWithoutSpottingsInput = {
    update: XOR<BirdUpdateWithoutSpottingsInput, BirdUncheckedUpdateWithoutSpottingsInput>
    create: XOR<BirdCreateWithoutSpottingsInput, BirdUncheckedCreateWithoutSpottingsInput>
    where?: BirdWhereInput
  }

  export type BirdUpdateToOneWithWhereWithoutSpottingsInput = {
    where?: BirdWhereInput
    data: XOR<BirdUpdateWithoutSpottingsInput, BirdUncheckedUpdateWithoutSpottingsInput>
  }

  export type BirdUpdateWithoutSpottingsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    scientificName?: StringFieldUpdateOperationsInput | string
    commonName?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    rarity?: NullableStringFieldUpdateOperationsInput | string | null
    habitat?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    photoAttribution?: NullableStringFieldUpdateOperationsInput | string | null
    conservationStatus?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BirdUncheckedUpdateWithoutSpottingsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    scientificName?: StringFieldUpdateOperationsInput | string
    commonName?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    rarity?: NullableStringFieldUpdateOperationsInput | string | null
    habitat?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    photoAttribution?: NullableStringFieldUpdateOperationsInput | string | null
    conservationStatus?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserSpottingCreateManyUserInput = {
    id?: string
    birdId: number
    latitude: number
    longitude: number
    location?: string | null
    notes?: string | null
    userPhoto?: string | null
    confidence?: string | null
    spottedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserSpottingUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    location?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    userPhoto?: NullableStringFieldUpdateOperationsInput | string | null
    confidence?: NullableStringFieldUpdateOperationsInput | string | null
    spottedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bird?: BirdUpdateOneRequiredWithoutSpottingsNestedInput
  }

  export type UserSpottingUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    birdId?: IntFieldUpdateOperationsInput | number
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    location?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    userPhoto?: NullableStringFieldUpdateOperationsInput | string | null
    confidence?: NullableStringFieldUpdateOperationsInput | string | null
    spottedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserSpottingUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    birdId?: IntFieldUpdateOperationsInput | number
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    location?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    userPhoto?: NullableStringFieldUpdateOperationsInput | string | null
    confidence?: NullableStringFieldUpdateOperationsInput | string | null
    spottedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserSpottingCreateManyBirdInput = {
    id?: string
    userId: string
    latitude: number
    longitude: number
    location?: string | null
    notes?: string | null
    userPhoto?: string | null
    confidence?: string | null
    spottedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserSpottingUpdateWithoutBirdInput = {
    id?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    location?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    userPhoto?: NullableStringFieldUpdateOperationsInput | string | null
    confidence?: NullableStringFieldUpdateOperationsInput | string | null
    spottedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSpottingsNestedInput
  }

  export type UserSpottingUncheckedUpdateWithoutBirdInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    location?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    userPhoto?: NullableStringFieldUpdateOperationsInput | string | null
    confidence?: NullableStringFieldUpdateOperationsInput | string | null
    spottedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserSpottingUncheckedUpdateManyWithoutBirdInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    location?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    userPhoto?: NullableStringFieldUpdateOperationsInput | string | null
    confidence?: NullableStringFieldUpdateOperationsInput | string | null
    spottedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}