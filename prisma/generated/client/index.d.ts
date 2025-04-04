
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
 * Model TimerSession
 * 
 */
export type TimerSession = $Result.DefaultSelection<Prisma.$TimerSessionPayload>
/**
 * Model Tag
 * 
 */
export type Tag = $Result.DefaultSelection<Prisma.$TagPayload>
/**
 * Model timer_sessions_tags
 * 
 */
export type timer_sessions_tags = $Result.DefaultSelection<Prisma.$timer_sessions_tagsPayload>
/**
 * Model Study
 * 
 */
export type Study = $Result.DefaultSelection<Prisma.$StudyPayload>

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
   * `prisma.timerSession`: Exposes CRUD operations for the **TimerSession** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TimerSessions
    * const timerSessions = await prisma.timerSession.findMany()
    * ```
    */
  get timerSession(): Prisma.TimerSessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tag`: Exposes CRUD operations for the **Tag** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tags
    * const tags = await prisma.tag.findMany()
    * ```
    */
  get tag(): Prisma.TagDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.timer_sessions_tags`: Exposes CRUD operations for the **timer_sessions_tags** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Timer_sessions_tags
    * const timer_sessions_tags = await prisma.timer_sessions_tags.findMany()
    * ```
    */
  get timer_sessions_tags(): Prisma.timer_sessions_tagsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.study`: Exposes CRUD operations for the **Study** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Studies
    * const studies = await prisma.study.findMany()
    * ```
    */
  get study(): Prisma.StudyDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.5.0
   * Query Engine version: 173f8d54f8d52e692c7e27e72a88314ec7aeff60
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
    TimerSession: 'TimerSession',
    Tag: 'Tag',
    timer_sessions_tags: 'timer_sessions_tags',
    Study: 'Study'
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
      modelProps: "user" | "timerSession" | "tag" | "timer_sessions_tags" | "study"
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
      TimerSession: {
        payload: Prisma.$TimerSessionPayload<ExtArgs>
        fields: Prisma.TimerSessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TimerSessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimerSessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TimerSessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimerSessionPayload>
          }
          findFirst: {
            args: Prisma.TimerSessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimerSessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TimerSessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimerSessionPayload>
          }
          findMany: {
            args: Prisma.TimerSessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimerSessionPayload>[]
          }
          create: {
            args: Prisma.TimerSessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimerSessionPayload>
          }
          createMany: {
            args: Prisma.TimerSessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TimerSessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimerSessionPayload>[]
          }
          delete: {
            args: Prisma.TimerSessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimerSessionPayload>
          }
          update: {
            args: Prisma.TimerSessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimerSessionPayload>
          }
          deleteMany: {
            args: Prisma.TimerSessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TimerSessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TimerSessionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimerSessionPayload>[]
          }
          upsert: {
            args: Prisma.TimerSessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimerSessionPayload>
          }
          aggregate: {
            args: Prisma.TimerSessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTimerSession>
          }
          groupBy: {
            args: Prisma.TimerSessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<TimerSessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.TimerSessionCountArgs<ExtArgs>
            result: $Utils.Optional<TimerSessionCountAggregateOutputType> | number
          }
        }
      }
      Tag: {
        payload: Prisma.$TagPayload<ExtArgs>
        fields: Prisma.TagFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TagFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TagFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          findFirst: {
            args: Prisma.TagFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TagFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          findMany: {
            args: Prisma.TagFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>[]
          }
          create: {
            args: Prisma.TagCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          createMany: {
            args: Prisma.TagCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TagCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>[]
          }
          delete: {
            args: Prisma.TagDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          update: {
            args: Prisma.TagUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          deleteMany: {
            args: Prisma.TagDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TagUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TagUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>[]
          }
          upsert: {
            args: Prisma.TagUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          aggregate: {
            args: Prisma.TagAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTag>
          }
          groupBy: {
            args: Prisma.TagGroupByArgs<ExtArgs>
            result: $Utils.Optional<TagGroupByOutputType>[]
          }
          count: {
            args: Prisma.TagCountArgs<ExtArgs>
            result: $Utils.Optional<TagCountAggregateOutputType> | number
          }
        }
      }
      timer_sessions_tags: {
        payload: Prisma.$timer_sessions_tagsPayload<ExtArgs>
        fields: Prisma.timer_sessions_tagsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.timer_sessions_tagsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$timer_sessions_tagsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.timer_sessions_tagsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$timer_sessions_tagsPayload>
          }
          findFirst: {
            args: Prisma.timer_sessions_tagsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$timer_sessions_tagsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.timer_sessions_tagsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$timer_sessions_tagsPayload>
          }
          findMany: {
            args: Prisma.timer_sessions_tagsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$timer_sessions_tagsPayload>[]
          }
          create: {
            args: Prisma.timer_sessions_tagsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$timer_sessions_tagsPayload>
          }
          createMany: {
            args: Prisma.timer_sessions_tagsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.timer_sessions_tagsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$timer_sessions_tagsPayload>[]
          }
          delete: {
            args: Prisma.timer_sessions_tagsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$timer_sessions_tagsPayload>
          }
          update: {
            args: Prisma.timer_sessions_tagsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$timer_sessions_tagsPayload>
          }
          deleteMany: {
            args: Prisma.timer_sessions_tagsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.timer_sessions_tagsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.timer_sessions_tagsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$timer_sessions_tagsPayload>[]
          }
          upsert: {
            args: Prisma.timer_sessions_tagsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$timer_sessions_tagsPayload>
          }
          aggregate: {
            args: Prisma.Timer_sessions_tagsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTimer_sessions_tags>
          }
          groupBy: {
            args: Prisma.timer_sessions_tagsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Timer_sessions_tagsGroupByOutputType>[]
          }
          count: {
            args: Prisma.timer_sessions_tagsCountArgs<ExtArgs>
            result: $Utils.Optional<Timer_sessions_tagsCountAggregateOutputType> | number
          }
        }
      }
      Study: {
        payload: Prisma.$StudyPayload<ExtArgs>
        fields: Prisma.StudyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StudyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StudyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudyPayload>
          }
          findFirst: {
            args: Prisma.StudyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StudyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudyPayload>
          }
          findMany: {
            args: Prisma.StudyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudyPayload>[]
          }
          create: {
            args: Prisma.StudyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudyPayload>
          }
          createMany: {
            args: Prisma.StudyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StudyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudyPayload>[]
          }
          delete: {
            args: Prisma.StudyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudyPayload>
          }
          update: {
            args: Prisma.StudyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudyPayload>
          }
          deleteMany: {
            args: Prisma.StudyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StudyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StudyUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudyPayload>[]
          }
          upsert: {
            args: Prisma.StudyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudyPayload>
          }
          aggregate: {
            args: Prisma.StudyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStudy>
          }
          groupBy: {
            args: Prisma.StudyGroupByArgs<ExtArgs>
            result: $Utils.Optional<StudyGroupByOutputType>[]
          }
          count: {
            args: Prisma.StudyCountArgs<ExtArgs>
            result: $Utils.Optional<StudyCountAggregateOutputType> | number
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
    timerSession?: TimerSessionOmit
    tag?: TagOmit
    timer_sessions_tags?: timer_sessions_tagsOmit
    study?: StudyOmit
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
    timerSessions: number
    studies: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    timerSessions?: boolean | UserCountOutputTypeCountTimerSessionsArgs
    studies?: boolean | UserCountOutputTypeCountStudiesArgs
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
  export type UserCountOutputTypeCountTimerSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TimerSessionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountStudiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudyWhereInput
  }


  /**
   * Count Type TimerSessionCountOutputType
   */

  export type TimerSessionCountOutputType = {
    timer_sessions_tags: number
  }

  export type TimerSessionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    timer_sessions_tags?: boolean | TimerSessionCountOutputTypeCountTimer_sessions_tagsArgs
  }

  // Custom InputTypes
  /**
   * TimerSessionCountOutputType without action
   */
  export type TimerSessionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimerSessionCountOutputType
     */
    select?: TimerSessionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TimerSessionCountOutputType without action
   */
  export type TimerSessionCountOutputTypeCountTimer_sessions_tagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: timer_sessions_tagsWhereInput
  }


  /**
   * Count Type TagCountOutputType
   */

  export type TagCountOutputType = {
    timer_sessions_tags: number
  }

  export type TagCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    timer_sessions_tags?: boolean | TagCountOutputTypeCountTimer_sessions_tagsArgs
  }

  // Custom InputTypes
  /**
   * TagCountOutputType without action
   */
  export type TagCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TagCountOutputType
     */
    select?: TagCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TagCountOutputType without action
   */
  export type TagCountOutputTypeCountTimer_sessions_tagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: timer_sessions_tagsWhereInput
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
    name: string | null
    email: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
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
    name: string
    email: string
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
    name?: boolean
    email?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    timerSessions?: boolean | User$timerSessionsArgs<ExtArgs>
    studies?: boolean | User$studiesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    timerSessions?: boolean | User$timerSessionsArgs<ExtArgs>
    studies?: boolean | User$studiesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      timerSessions: Prisma.$TimerSessionPayload<ExtArgs>[]
      studies: Prisma.$StudyPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
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
    timerSessions<T extends User$timerSessionsArgs<ExtArgs> = {}>(args?: Subset<T, User$timerSessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TimerSessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    studies<T extends User$studiesArgs<ExtArgs> = {}>(args?: Subset<T, User$studiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
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
    skipDuplicates?: boolean
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
    skipDuplicates?: boolean
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
   * User.timerSessions
   */
  export type User$timerSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimerSession
     */
    select?: TimerSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TimerSession
     */
    omit?: TimerSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimerSessionInclude<ExtArgs> | null
    where?: TimerSessionWhereInput
    orderBy?: TimerSessionOrderByWithRelationInput | TimerSessionOrderByWithRelationInput[]
    cursor?: TimerSessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TimerSessionScalarFieldEnum | TimerSessionScalarFieldEnum[]
  }

  /**
   * User.studies
   */
  export type User$studiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Study
     */
    select?: StudySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Study
     */
    omit?: StudyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudyInclude<ExtArgs> | null
    where?: StudyWhereInput
    orderBy?: StudyOrderByWithRelationInput | StudyOrderByWithRelationInput[]
    cursor?: StudyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StudyScalarFieldEnum | StudyScalarFieldEnum[]
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
   * Model TimerSession
   */

  export type AggregateTimerSession = {
    _count: TimerSessionCountAggregateOutputType | null
    _avg: TimerSessionAvgAggregateOutputType | null
    _sum: TimerSessionSumAggregateOutputType | null
    _min: TimerSessionMinAggregateOutputType | null
    _max: TimerSessionMaxAggregateOutputType | null
  }

  export type TimerSessionAvgAggregateOutputType = {
    seconds: number | null
  }

  export type TimerSessionSumAggregateOutputType = {
    seconds: number | null
  }

  export type TimerSessionMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    seconds: number | null
    startedAt: Date | null
    endedAt: Date | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TimerSessionMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    seconds: number | null
    startedAt: Date | null
    endedAt: Date | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TimerSessionCountAggregateOutputType = {
    id: number
    title: number
    description: number
    seconds: number
    startedAt: number
    endedAt: number
    userId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TimerSessionAvgAggregateInputType = {
    seconds?: true
  }

  export type TimerSessionSumAggregateInputType = {
    seconds?: true
  }

  export type TimerSessionMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    seconds?: true
    startedAt?: true
    endedAt?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TimerSessionMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    seconds?: true
    startedAt?: true
    endedAt?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TimerSessionCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    seconds?: true
    startedAt?: true
    endedAt?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TimerSessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TimerSession to aggregate.
     */
    where?: TimerSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TimerSessions to fetch.
     */
    orderBy?: TimerSessionOrderByWithRelationInput | TimerSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TimerSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TimerSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TimerSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TimerSessions
    **/
    _count?: true | TimerSessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TimerSessionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TimerSessionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TimerSessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TimerSessionMaxAggregateInputType
  }

  export type GetTimerSessionAggregateType<T extends TimerSessionAggregateArgs> = {
        [P in keyof T & keyof AggregateTimerSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTimerSession[P]>
      : GetScalarType<T[P], AggregateTimerSession[P]>
  }




  export type TimerSessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TimerSessionWhereInput
    orderBy?: TimerSessionOrderByWithAggregationInput | TimerSessionOrderByWithAggregationInput[]
    by: TimerSessionScalarFieldEnum[] | TimerSessionScalarFieldEnum
    having?: TimerSessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TimerSessionCountAggregateInputType | true
    _avg?: TimerSessionAvgAggregateInputType
    _sum?: TimerSessionSumAggregateInputType
    _min?: TimerSessionMinAggregateInputType
    _max?: TimerSessionMaxAggregateInputType
  }

  export type TimerSessionGroupByOutputType = {
    id: string
    title: string
    description: string | null
    seconds: number
    startedAt: Date
    endedAt: Date | null
    userId: string
    createdAt: Date
    updatedAt: Date
    _count: TimerSessionCountAggregateOutputType | null
    _avg: TimerSessionAvgAggregateOutputType | null
    _sum: TimerSessionSumAggregateOutputType | null
    _min: TimerSessionMinAggregateOutputType | null
    _max: TimerSessionMaxAggregateOutputType | null
  }

  type GetTimerSessionGroupByPayload<T extends TimerSessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TimerSessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TimerSessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TimerSessionGroupByOutputType[P]>
            : GetScalarType<T[P], TimerSessionGroupByOutputType[P]>
        }
      >
    >


  export type TimerSessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    seconds?: boolean
    startedAt?: boolean
    endedAt?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    timer_sessions_tags?: boolean | TimerSession$timer_sessions_tagsArgs<ExtArgs>
    _count?: boolean | TimerSessionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["timerSession"]>

  export type TimerSessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    seconds?: boolean
    startedAt?: boolean
    endedAt?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["timerSession"]>

  export type TimerSessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    seconds?: boolean
    startedAt?: boolean
    endedAt?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["timerSession"]>

  export type TimerSessionSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    seconds?: boolean
    startedAt?: boolean
    endedAt?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TimerSessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "seconds" | "startedAt" | "endedAt" | "userId" | "createdAt" | "updatedAt", ExtArgs["result"]["timerSession"]>
  export type TimerSessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    timer_sessions_tags?: boolean | TimerSession$timer_sessions_tagsArgs<ExtArgs>
    _count?: boolean | TimerSessionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TimerSessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type TimerSessionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $TimerSessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TimerSession"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      timer_sessions_tags: Prisma.$timer_sessions_tagsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      description: string | null
      seconds: number
      startedAt: Date
      endedAt: Date | null
      userId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["timerSession"]>
    composites: {}
  }

  type TimerSessionGetPayload<S extends boolean | null | undefined | TimerSessionDefaultArgs> = $Result.GetResult<Prisma.$TimerSessionPayload, S>

  type TimerSessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TimerSessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TimerSessionCountAggregateInputType | true
    }

  export interface TimerSessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TimerSession'], meta: { name: 'TimerSession' } }
    /**
     * Find zero or one TimerSession that matches the filter.
     * @param {TimerSessionFindUniqueArgs} args - Arguments to find a TimerSession
     * @example
     * // Get one TimerSession
     * const timerSession = await prisma.timerSession.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TimerSessionFindUniqueArgs>(args: SelectSubset<T, TimerSessionFindUniqueArgs<ExtArgs>>): Prisma__TimerSessionClient<$Result.GetResult<Prisma.$TimerSessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TimerSession that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TimerSessionFindUniqueOrThrowArgs} args - Arguments to find a TimerSession
     * @example
     * // Get one TimerSession
     * const timerSession = await prisma.timerSession.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TimerSessionFindUniqueOrThrowArgs>(args: SelectSubset<T, TimerSessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TimerSessionClient<$Result.GetResult<Prisma.$TimerSessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TimerSession that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimerSessionFindFirstArgs} args - Arguments to find a TimerSession
     * @example
     * // Get one TimerSession
     * const timerSession = await prisma.timerSession.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TimerSessionFindFirstArgs>(args?: SelectSubset<T, TimerSessionFindFirstArgs<ExtArgs>>): Prisma__TimerSessionClient<$Result.GetResult<Prisma.$TimerSessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TimerSession that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimerSessionFindFirstOrThrowArgs} args - Arguments to find a TimerSession
     * @example
     * // Get one TimerSession
     * const timerSession = await prisma.timerSession.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TimerSessionFindFirstOrThrowArgs>(args?: SelectSubset<T, TimerSessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__TimerSessionClient<$Result.GetResult<Prisma.$TimerSessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TimerSessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimerSessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TimerSessions
     * const timerSessions = await prisma.timerSession.findMany()
     * 
     * // Get first 10 TimerSessions
     * const timerSessions = await prisma.timerSession.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const timerSessionWithIdOnly = await prisma.timerSession.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TimerSessionFindManyArgs>(args?: SelectSubset<T, TimerSessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TimerSessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TimerSession.
     * @param {TimerSessionCreateArgs} args - Arguments to create a TimerSession.
     * @example
     * // Create one TimerSession
     * const TimerSession = await prisma.timerSession.create({
     *   data: {
     *     // ... data to create a TimerSession
     *   }
     * })
     * 
     */
    create<T extends TimerSessionCreateArgs>(args: SelectSubset<T, TimerSessionCreateArgs<ExtArgs>>): Prisma__TimerSessionClient<$Result.GetResult<Prisma.$TimerSessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TimerSessions.
     * @param {TimerSessionCreateManyArgs} args - Arguments to create many TimerSessions.
     * @example
     * // Create many TimerSessions
     * const timerSession = await prisma.timerSession.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TimerSessionCreateManyArgs>(args?: SelectSubset<T, TimerSessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TimerSessions and returns the data saved in the database.
     * @param {TimerSessionCreateManyAndReturnArgs} args - Arguments to create many TimerSessions.
     * @example
     * // Create many TimerSessions
     * const timerSession = await prisma.timerSession.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TimerSessions and only return the `id`
     * const timerSessionWithIdOnly = await prisma.timerSession.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TimerSessionCreateManyAndReturnArgs>(args?: SelectSubset<T, TimerSessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TimerSessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TimerSession.
     * @param {TimerSessionDeleteArgs} args - Arguments to delete one TimerSession.
     * @example
     * // Delete one TimerSession
     * const TimerSession = await prisma.timerSession.delete({
     *   where: {
     *     // ... filter to delete one TimerSession
     *   }
     * })
     * 
     */
    delete<T extends TimerSessionDeleteArgs>(args: SelectSubset<T, TimerSessionDeleteArgs<ExtArgs>>): Prisma__TimerSessionClient<$Result.GetResult<Prisma.$TimerSessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TimerSession.
     * @param {TimerSessionUpdateArgs} args - Arguments to update one TimerSession.
     * @example
     * // Update one TimerSession
     * const timerSession = await prisma.timerSession.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TimerSessionUpdateArgs>(args: SelectSubset<T, TimerSessionUpdateArgs<ExtArgs>>): Prisma__TimerSessionClient<$Result.GetResult<Prisma.$TimerSessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TimerSessions.
     * @param {TimerSessionDeleteManyArgs} args - Arguments to filter TimerSessions to delete.
     * @example
     * // Delete a few TimerSessions
     * const { count } = await prisma.timerSession.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TimerSessionDeleteManyArgs>(args?: SelectSubset<T, TimerSessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TimerSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimerSessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TimerSessions
     * const timerSession = await prisma.timerSession.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TimerSessionUpdateManyArgs>(args: SelectSubset<T, TimerSessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TimerSessions and returns the data updated in the database.
     * @param {TimerSessionUpdateManyAndReturnArgs} args - Arguments to update many TimerSessions.
     * @example
     * // Update many TimerSessions
     * const timerSession = await prisma.timerSession.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TimerSessions and only return the `id`
     * const timerSessionWithIdOnly = await prisma.timerSession.updateManyAndReturn({
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
    updateManyAndReturn<T extends TimerSessionUpdateManyAndReturnArgs>(args: SelectSubset<T, TimerSessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TimerSessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TimerSession.
     * @param {TimerSessionUpsertArgs} args - Arguments to update or create a TimerSession.
     * @example
     * // Update or create a TimerSession
     * const timerSession = await prisma.timerSession.upsert({
     *   create: {
     *     // ... data to create a TimerSession
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TimerSession we want to update
     *   }
     * })
     */
    upsert<T extends TimerSessionUpsertArgs>(args: SelectSubset<T, TimerSessionUpsertArgs<ExtArgs>>): Prisma__TimerSessionClient<$Result.GetResult<Prisma.$TimerSessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TimerSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimerSessionCountArgs} args - Arguments to filter TimerSessions to count.
     * @example
     * // Count the number of TimerSessions
     * const count = await prisma.timerSession.count({
     *   where: {
     *     // ... the filter for the TimerSessions we want to count
     *   }
     * })
    **/
    count<T extends TimerSessionCountArgs>(
      args?: Subset<T, TimerSessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TimerSessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TimerSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimerSessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TimerSessionAggregateArgs>(args: Subset<T, TimerSessionAggregateArgs>): Prisma.PrismaPromise<GetTimerSessionAggregateType<T>>

    /**
     * Group by TimerSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimerSessionGroupByArgs} args - Group by arguments.
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
      T extends TimerSessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TimerSessionGroupByArgs['orderBy'] }
        : { orderBy?: TimerSessionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TimerSessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTimerSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TimerSession model
   */
  readonly fields: TimerSessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TimerSession.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TimerSessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    timer_sessions_tags<T extends TimerSession$timer_sessions_tagsArgs<ExtArgs> = {}>(args?: Subset<T, TimerSession$timer_sessions_tagsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$timer_sessions_tagsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the TimerSession model
   */ 
  interface TimerSessionFieldRefs {
    readonly id: FieldRef<"TimerSession", 'String'>
    readonly title: FieldRef<"TimerSession", 'String'>
    readonly description: FieldRef<"TimerSession", 'String'>
    readonly seconds: FieldRef<"TimerSession", 'Int'>
    readonly startedAt: FieldRef<"TimerSession", 'DateTime'>
    readonly endedAt: FieldRef<"TimerSession", 'DateTime'>
    readonly userId: FieldRef<"TimerSession", 'String'>
    readonly createdAt: FieldRef<"TimerSession", 'DateTime'>
    readonly updatedAt: FieldRef<"TimerSession", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TimerSession findUnique
   */
  export type TimerSessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimerSession
     */
    select?: TimerSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TimerSession
     */
    omit?: TimerSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimerSessionInclude<ExtArgs> | null
    /**
     * Filter, which TimerSession to fetch.
     */
    where: TimerSessionWhereUniqueInput
  }

  /**
   * TimerSession findUniqueOrThrow
   */
  export type TimerSessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimerSession
     */
    select?: TimerSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TimerSession
     */
    omit?: TimerSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimerSessionInclude<ExtArgs> | null
    /**
     * Filter, which TimerSession to fetch.
     */
    where: TimerSessionWhereUniqueInput
  }

  /**
   * TimerSession findFirst
   */
  export type TimerSessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimerSession
     */
    select?: TimerSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TimerSession
     */
    omit?: TimerSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimerSessionInclude<ExtArgs> | null
    /**
     * Filter, which TimerSession to fetch.
     */
    where?: TimerSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TimerSessions to fetch.
     */
    orderBy?: TimerSessionOrderByWithRelationInput | TimerSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TimerSessions.
     */
    cursor?: TimerSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TimerSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TimerSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TimerSessions.
     */
    distinct?: TimerSessionScalarFieldEnum | TimerSessionScalarFieldEnum[]
  }

  /**
   * TimerSession findFirstOrThrow
   */
  export type TimerSessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimerSession
     */
    select?: TimerSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TimerSession
     */
    omit?: TimerSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimerSessionInclude<ExtArgs> | null
    /**
     * Filter, which TimerSession to fetch.
     */
    where?: TimerSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TimerSessions to fetch.
     */
    orderBy?: TimerSessionOrderByWithRelationInput | TimerSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TimerSessions.
     */
    cursor?: TimerSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TimerSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TimerSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TimerSessions.
     */
    distinct?: TimerSessionScalarFieldEnum | TimerSessionScalarFieldEnum[]
  }

  /**
   * TimerSession findMany
   */
  export type TimerSessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimerSession
     */
    select?: TimerSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TimerSession
     */
    omit?: TimerSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimerSessionInclude<ExtArgs> | null
    /**
     * Filter, which TimerSessions to fetch.
     */
    where?: TimerSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TimerSessions to fetch.
     */
    orderBy?: TimerSessionOrderByWithRelationInput | TimerSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TimerSessions.
     */
    cursor?: TimerSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TimerSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TimerSessions.
     */
    skip?: number
    distinct?: TimerSessionScalarFieldEnum | TimerSessionScalarFieldEnum[]
  }

  /**
   * TimerSession create
   */
  export type TimerSessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimerSession
     */
    select?: TimerSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TimerSession
     */
    omit?: TimerSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimerSessionInclude<ExtArgs> | null
    /**
     * The data needed to create a TimerSession.
     */
    data: XOR<TimerSessionCreateInput, TimerSessionUncheckedCreateInput>
  }

  /**
   * TimerSession createMany
   */
  export type TimerSessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TimerSessions.
     */
    data: TimerSessionCreateManyInput | TimerSessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TimerSession createManyAndReturn
   */
  export type TimerSessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimerSession
     */
    select?: TimerSessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TimerSession
     */
    omit?: TimerSessionOmit<ExtArgs> | null
    /**
     * The data used to create many TimerSessions.
     */
    data: TimerSessionCreateManyInput | TimerSessionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimerSessionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TimerSession update
   */
  export type TimerSessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimerSession
     */
    select?: TimerSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TimerSession
     */
    omit?: TimerSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimerSessionInclude<ExtArgs> | null
    /**
     * The data needed to update a TimerSession.
     */
    data: XOR<TimerSessionUpdateInput, TimerSessionUncheckedUpdateInput>
    /**
     * Choose, which TimerSession to update.
     */
    where: TimerSessionWhereUniqueInput
  }

  /**
   * TimerSession updateMany
   */
  export type TimerSessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TimerSessions.
     */
    data: XOR<TimerSessionUpdateManyMutationInput, TimerSessionUncheckedUpdateManyInput>
    /**
     * Filter which TimerSessions to update
     */
    where?: TimerSessionWhereInput
    /**
     * Limit how many TimerSessions to update.
     */
    limit?: number
  }

  /**
   * TimerSession updateManyAndReturn
   */
  export type TimerSessionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimerSession
     */
    select?: TimerSessionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TimerSession
     */
    omit?: TimerSessionOmit<ExtArgs> | null
    /**
     * The data used to update TimerSessions.
     */
    data: XOR<TimerSessionUpdateManyMutationInput, TimerSessionUncheckedUpdateManyInput>
    /**
     * Filter which TimerSessions to update
     */
    where?: TimerSessionWhereInput
    /**
     * Limit how many TimerSessions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimerSessionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TimerSession upsert
   */
  export type TimerSessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimerSession
     */
    select?: TimerSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TimerSession
     */
    omit?: TimerSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimerSessionInclude<ExtArgs> | null
    /**
     * The filter to search for the TimerSession to update in case it exists.
     */
    where: TimerSessionWhereUniqueInput
    /**
     * In case the TimerSession found by the `where` argument doesn't exist, create a new TimerSession with this data.
     */
    create: XOR<TimerSessionCreateInput, TimerSessionUncheckedCreateInput>
    /**
     * In case the TimerSession was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TimerSessionUpdateInput, TimerSessionUncheckedUpdateInput>
  }

  /**
   * TimerSession delete
   */
  export type TimerSessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimerSession
     */
    select?: TimerSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TimerSession
     */
    omit?: TimerSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimerSessionInclude<ExtArgs> | null
    /**
     * Filter which TimerSession to delete.
     */
    where: TimerSessionWhereUniqueInput
  }

  /**
   * TimerSession deleteMany
   */
  export type TimerSessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TimerSessions to delete
     */
    where?: TimerSessionWhereInput
    /**
     * Limit how many TimerSessions to delete.
     */
    limit?: number
  }

  /**
   * TimerSession.timer_sessions_tags
   */
  export type TimerSession$timer_sessions_tagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the timer_sessions_tags
     */
    select?: timer_sessions_tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the timer_sessions_tags
     */
    omit?: timer_sessions_tagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: timer_sessions_tagsInclude<ExtArgs> | null
    where?: timer_sessions_tagsWhereInput
    orderBy?: timer_sessions_tagsOrderByWithRelationInput | timer_sessions_tagsOrderByWithRelationInput[]
    cursor?: timer_sessions_tagsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Timer_sessions_tagsScalarFieldEnum | Timer_sessions_tagsScalarFieldEnum[]
  }

  /**
   * TimerSession without action
   */
  export type TimerSessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimerSession
     */
    select?: TimerSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TimerSession
     */
    omit?: TimerSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimerSessionInclude<ExtArgs> | null
  }


  /**
   * Model Tag
   */

  export type AggregateTag = {
    _count: TagCountAggregateOutputType | null
    _min: TagMinAggregateOutputType | null
    _max: TagMaxAggregateOutputType | null
  }

  export type TagMinAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TagMaxAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TagCountAggregateOutputType = {
    id: number
    name: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TagMinAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TagMaxAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TagCountAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TagAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tag to aggregate.
     */
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tags
    **/
    _count?: true | TagCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TagMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TagMaxAggregateInputType
  }

  export type GetTagAggregateType<T extends TagAggregateArgs> = {
        [P in keyof T & keyof AggregateTag]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTag[P]>
      : GetScalarType<T[P], AggregateTag[P]>
  }




  export type TagGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TagWhereInput
    orderBy?: TagOrderByWithAggregationInput | TagOrderByWithAggregationInput[]
    by: TagScalarFieldEnum[] | TagScalarFieldEnum
    having?: TagScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TagCountAggregateInputType | true
    _min?: TagMinAggregateInputType
    _max?: TagMaxAggregateInputType
  }

  export type TagGroupByOutputType = {
    id: string
    name: string
    createdAt: Date
    updatedAt: Date
    _count: TagCountAggregateOutputType | null
    _min: TagMinAggregateOutputType | null
    _max: TagMaxAggregateOutputType | null
  }

  type GetTagGroupByPayload<T extends TagGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TagGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TagGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TagGroupByOutputType[P]>
            : GetScalarType<T[P], TagGroupByOutputType[P]>
        }
      >
    >


  export type TagSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    timer_sessions_tags?: boolean | Tag$timer_sessions_tagsArgs<ExtArgs>
    _count?: boolean | TagCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tag"]>

  export type TagSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["tag"]>

  export type TagSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["tag"]>

  export type TagSelectScalar = {
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TagOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "createdAt" | "updatedAt", ExtArgs["result"]["tag"]>
  export type TagInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    timer_sessions_tags?: boolean | Tag$timer_sessions_tagsArgs<ExtArgs>
    _count?: boolean | TagCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TagIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type TagIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $TagPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Tag"
    objects: {
      timer_sessions_tags: Prisma.$timer_sessions_tagsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["tag"]>
    composites: {}
  }

  type TagGetPayload<S extends boolean | null | undefined | TagDefaultArgs> = $Result.GetResult<Prisma.$TagPayload, S>

  type TagCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TagFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TagCountAggregateInputType | true
    }

  export interface TagDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Tag'], meta: { name: 'Tag' } }
    /**
     * Find zero or one Tag that matches the filter.
     * @param {TagFindUniqueArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TagFindUniqueArgs>(args: SelectSubset<T, TagFindUniqueArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tag that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TagFindUniqueOrThrowArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TagFindUniqueOrThrowArgs>(args: SelectSubset<T, TagFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tag that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagFindFirstArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TagFindFirstArgs>(args?: SelectSubset<T, TagFindFirstArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tag that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagFindFirstOrThrowArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TagFindFirstOrThrowArgs>(args?: SelectSubset<T, TagFindFirstOrThrowArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tags
     * const tags = await prisma.tag.findMany()
     * 
     * // Get first 10 Tags
     * const tags = await prisma.tag.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tagWithIdOnly = await prisma.tag.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TagFindManyArgs>(args?: SelectSubset<T, TagFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tag.
     * @param {TagCreateArgs} args - Arguments to create a Tag.
     * @example
     * // Create one Tag
     * const Tag = await prisma.tag.create({
     *   data: {
     *     // ... data to create a Tag
     *   }
     * })
     * 
     */
    create<T extends TagCreateArgs>(args: SelectSubset<T, TagCreateArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tags.
     * @param {TagCreateManyArgs} args - Arguments to create many Tags.
     * @example
     * // Create many Tags
     * const tag = await prisma.tag.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TagCreateManyArgs>(args?: SelectSubset<T, TagCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tags and returns the data saved in the database.
     * @param {TagCreateManyAndReturnArgs} args - Arguments to create many Tags.
     * @example
     * // Create many Tags
     * const tag = await prisma.tag.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tags and only return the `id`
     * const tagWithIdOnly = await prisma.tag.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TagCreateManyAndReturnArgs>(args?: SelectSubset<T, TagCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Tag.
     * @param {TagDeleteArgs} args - Arguments to delete one Tag.
     * @example
     * // Delete one Tag
     * const Tag = await prisma.tag.delete({
     *   where: {
     *     // ... filter to delete one Tag
     *   }
     * })
     * 
     */
    delete<T extends TagDeleteArgs>(args: SelectSubset<T, TagDeleteArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tag.
     * @param {TagUpdateArgs} args - Arguments to update one Tag.
     * @example
     * // Update one Tag
     * const tag = await prisma.tag.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TagUpdateArgs>(args: SelectSubset<T, TagUpdateArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tags.
     * @param {TagDeleteManyArgs} args - Arguments to filter Tags to delete.
     * @example
     * // Delete a few Tags
     * const { count } = await prisma.tag.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TagDeleteManyArgs>(args?: SelectSubset<T, TagDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tags
     * const tag = await prisma.tag.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TagUpdateManyArgs>(args: SelectSubset<T, TagUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tags and returns the data updated in the database.
     * @param {TagUpdateManyAndReturnArgs} args - Arguments to update many Tags.
     * @example
     * // Update many Tags
     * const tag = await prisma.tag.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tags and only return the `id`
     * const tagWithIdOnly = await prisma.tag.updateManyAndReturn({
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
    updateManyAndReturn<T extends TagUpdateManyAndReturnArgs>(args: SelectSubset<T, TagUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Tag.
     * @param {TagUpsertArgs} args - Arguments to update or create a Tag.
     * @example
     * // Update or create a Tag
     * const tag = await prisma.tag.upsert({
     *   create: {
     *     // ... data to create a Tag
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tag we want to update
     *   }
     * })
     */
    upsert<T extends TagUpsertArgs>(args: SelectSubset<T, TagUpsertArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagCountArgs} args - Arguments to filter Tags to count.
     * @example
     * // Count the number of Tags
     * const count = await prisma.tag.count({
     *   where: {
     *     // ... the filter for the Tags we want to count
     *   }
     * })
    **/
    count<T extends TagCountArgs>(
      args?: Subset<T, TagCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TagCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TagAggregateArgs>(args: Subset<T, TagAggregateArgs>): Prisma.PrismaPromise<GetTagAggregateType<T>>

    /**
     * Group by Tag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagGroupByArgs} args - Group by arguments.
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
      T extends TagGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TagGroupByArgs['orderBy'] }
        : { orderBy?: TagGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TagGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTagGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Tag model
   */
  readonly fields: TagFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Tag.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TagClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    timer_sessions_tags<T extends Tag$timer_sessions_tagsArgs<ExtArgs> = {}>(args?: Subset<T, Tag$timer_sessions_tagsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$timer_sessions_tagsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Tag model
   */ 
  interface TagFieldRefs {
    readonly id: FieldRef<"Tag", 'String'>
    readonly name: FieldRef<"Tag", 'String'>
    readonly createdAt: FieldRef<"Tag", 'DateTime'>
    readonly updatedAt: FieldRef<"Tag", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Tag findUnique
   */
  export type TagFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tag to fetch.
     */
    where: TagWhereUniqueInput
  }

  /**
   * Tag findUniqueOrThrow
   */
  export type TagFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tag to fetch.
     */
    where: TagWhereUniqueInput
  }

  /**
   * Tag findFirst
   */
  export type TagFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tag to fetch.
     */
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tags.
     */
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tags.
     */
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[]
  }

  /**
   * Tag findFirstOrThrow
   */
  export type TagFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tag to fetch.
     */
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tags.
     */
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tags.
     */
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[]
  }

  /**
   * Tag findMany
   */
  export type TagFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tags to fetch.
     */
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tags.
     */
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[]
  }

  /**
   * Tag create
   */
  export type TagCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * The data needed to create a Tag.
     */
    data: XOR<TagCreateInput, TagUncheckedCreateInput>
  }

  /**
   * Tag createMany
   */
  export type TagCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tags.
     */
    data: TagCreateManyInput | TagCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tag createManyAndReturn
   */
  export type TagCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * The data used to create many Tags.
     */
    data: TagCreateManyInput | TagCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tag update
   */
  export type TagUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * The data needed to update a Tag.
     */
    data: XOR<TagUpdateInput, TagUncheckedUpdateInput>
    /**
     * Choose, which Tag to update.
     */
    where: TagWhereUniqueInput
  }

  /**
   * Tag updateMany
   */
  export type TagUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tags.
     */
    data: XOR<TagUpdateManyMutationInput, TagUncheckedUpdateManyInput>
    /**
     * Filter which Tags to update
     */
    where?: TagWhereInput
    /**
     * Limit how many Tags to update.
     */
    limit?: number
  }

  /**
   * Tag updateManyAndReturn
   */
  export type TagUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * The data used to update Tags.
     */
    data: XOR<TagUpdateManyMutationInput, TagUncheckedUpdateManyInput>
    /**
     * Filter which Tags to update
     */
    where?: TagWhereInput
    /**
     * Limit how many Tags to update.
     */
    limit?: number
  }

  /**
   * Tag upsert
   */
  export type TagUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * The filter to search for the Tag to update in case it exists.
     */
    where: TagWhereUniqueInput
    /**
     * In case the Tag found by the `where` argument doesn't exist, create a new Tag with this data.
     */
    create: XOR<TagCreateInput, TagUncheckedCreateInput>
    /**
     * In case the Tag was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TagUpdateInput, TagUncheckedUpdateInput>
  }

  /**
   * Tag delete
   */
  export type TagDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter which Tag to delete.
     */
    where: TagWhereUniqueInput
  }

  /**
   * Tag deleteMany
   */
  export type TagDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tags to delete
     */
    where?: TagWhereInput
    /**
     * Limit how many Tags to delete.
     */
    limit?: number
  }

  /**
   * Tag.timer_sessions_tags
   */
  export type Tag$timer_sessions_tagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the timer_sessions_tags
     */
    select?: timer_sessions_tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the timer_sessions_tags
     */
    omit?: timer_sessions_tagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: timer_sessions_tagsInclude<ExtArgs> | null
    where?: timer_sessions_tagsWhereInput
    orderBy?: timer_sessions_tagsOrderByWithRelationInput | timer_sessions_tagsOrderByWithRelationInput[]
    cursor?: timer_sessions_tagsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Timer_sessions_tagsScalarFieldEnum | Timer_sessions_tagsScalarFieldEnum[]
  }

  /**
   * Tag without action
   */
  export type TagDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
  }


  /**
   * Model timer_sessions_tags
   */

  export type AggregateTimer_sessions_tags = {
    _count: Timer_sessions_tagsCountAggregateOutputType | null
    _min: Timer_sessions_tagsMinAggregateOutputType | null
    _max: Timer_sessions_tagsMaxAggregateOutputType | null
  }

  export type Timer_sessions_tagsMinAggregateOutputType = {
    timer_session_id: string | null
    tag_id: string | null
  }

  export type Timer_sessions_tagsMaxAggregateOutputType = {
    timer_session_id: string | null
    tag_id: string | null
  }

  export type Timer_sessions_tagsCountAggregateOutputType = {
    timer_session_id: number
    tag_id: number
    _all: number
  }


  export type Timer_sessions_tagsMinAggregateInputType = {
    timer_session_id?: true
    tag_id?: true
  }

  export type Timer_sessions_tagsMaxAggregateInputType = {
    timer_session_id?: true
    tag_id?: true
  }

  export type Timer_sessions_tagsCountAggregateInputType = {
    timer_session_id?: true
    tag_id?: true
    _all?: true
  }

  export type Timer_sessions_tagsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which timer_sessions_tags to aggregate.
     */
    where?: timer_sessions_tagsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of timer_sessions_tags to fetch.
     */
    orderBy?: timer_sessions_tagsOrderByWithRelationInput | timer_sessions_tagsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: timer_sessions_tagsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` timer_sessions_tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` timer_sessions_tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned timer_sessions_tags
    **/
    _count?: true | Timer_sessions_tagsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Timer_sessions_tagsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Timer_sessions_tagsMaxAggregateInputType
  }

  export type GetTimer_sessions_tagsAggregateType<T extends Timer_sessions_tagsAggregateArgs> = {
        [P in keyof T & keyof AggregateTimer_sessions_tags]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTimer_sessions_tags[P]>
      : GetScalarType<T[P], AggregateTimer_sessions_tags[P]>
  }




  export type timer_sessions_tagsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: timer_sessions_tagsWhereInput
    orderBy?: timer_sessions_tagsOrderByWithAggregationInput | timer_sessions_tagsOrderByWithAggregationInput[]
    by: Timer_sessions_tagsScalarFieldEnum[] | Timer_sessions_tagsScalarFieldEnum
    having?: timer_sessions_tagsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Timer_sessions_tagsCountAggregateInputType | true
    _min?: Timer_sessions_tagsMinAggregateInputType
    _max?: Timer_sessions_tagsMaxAggregateInputType
  }

  export type Timer_sessions_tagsGroupByOutputType = {
    timer_session_id: string
    tag_id: string
    _count: Timer_sessions_tagsCountAggregateOutputType | null
    _min: Timer_sessions_tagsMinAggregateOutputType | null
    _max: Timer_sessions_tagsMaxAggregateOutputType | null
  }

  type GetTimer_sessions_tagsGroupByPayload<T extends timer_sessions_tagsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Timer_sessions_tagsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Timer_sessions_tagsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Timer_sessions_tagsGroupByOutputType[P]>
            : GetScalarType<T[P], Timer_sessions_tagsGroupByOutputType[P]>
        }
      >
    >


  export type timer_sessions_tagsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    timer_session_id?: boolean
    tag_id?: boolean
    tags?: boolean | TagDefaultArgs<ExtArgs>
    timer_sessions?: boolean | TimerSessionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["timer_sessions_tags"]>

  export type timer_sessions_tagsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    timer_session_id?: boolean
    tag_id?: boolean
    tags?: boolean | TagDefaultArgs<ExtArgs>
    timer_sessions?: boolean | TimerSessionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["timer_sessions_tags"]>

  export type timer_sessions_tagsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    timer_session_id?: boolean
    tag_id?: boolean
    tags?: boolean | TagDefaultArgs<ExtArgs>
    timer_sessions?: boolean | TimerSessionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["timer_sessions_tags"]>

  export type timer_sessions_tagsSelectScalar = {
    timer_session_id?: boolean
    tag_id?: boolean
  }

  export type timer_sessions_tagsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"timer_session_id" | "tag_id", ExtArgs["result"]["timer_sessions_tags"]>
  export type timer_sessions_tagsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tags?: boolean | TagDefaultArgs<ExtArgs>
    timer_sessions?: boolean | TimerSessionDefaultArgs<ExtArgs>
  }
  export type timer_sessions_tagsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tags?: boolean | TagDefaultArgs<ExtArgs>
    timer_sessions?: boolean | TimerSessionDefaultArgs<ExtArgs>
  }
  export type timer_sessions_tagsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tags?: boolean | TagDefaultArgs<ExtArgs>
    timer_sessions?: boolean | TimerSessionDefaultArgs<ExtArgs>
  }

  export type $timer_sessions_tagsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "timer_sessions_tags"
    objects: {
      tags: Prisma.$TagPayload<ExtArgs>
      timer_sessions: Prisma.$TimerSessionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      timer_session_id: string
      tag_id: string
    }, ExtArgs["result"]["timer_sessions_tags"]>
    composites: {}
  }

  type timer_sessions_tagsGetPayload<S extends boolean | null | undefined | timer_sessions_tagsDefaultArgs> = $Result.GetResult<Prisma.$timer_sessions_tagsPayload, S>

  type timer_sessions_tagsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<timer_sessions_tagsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Timer_sessions_tagsCountAggregateInputType | true
    }

  export interface timer_sessions_tagsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['timer_sessions_tags'], meta: { name: 'timer_sessions_tags' } }
    /**
     * Find zero or one Timer_sessions_tags that matches the filter.
     * @param {timer_sessions_tagsFindUniqueArgs} args - Arguments to find a Timer_sessions_tags
     * @example
     * // Get one Timer_sessions_tags
     * const timer_sessions_tags = await prisma.timer_sessions_tags.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends timer_sessions_tagsFindUniqueArgs>(args: SelectSubset<T, timer_sessions_tagsFindUniqueArgs<ExtArgs>>): Prisma__timer_sessions_tagsClient<$Result.GetResult<Prisma.$timer_sessions_tagsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Timer_sessions_tags that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {timer_sessions_tagsFindUniqueOrThrowArgs} args - Arguments to find a Timer_sessions_tags
     * @example
     * // Get one Timer_sessions_tags
     * const timer_sessions_tags = await prisma.timer_sessions_tags.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends timer_sessions_tagsFindUniqueOrThrowArgs>(args: SelectSubset<T, timer_sessions_tagsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__timer_sessions_tagsClient<$Result.GetResult<Prisma.$timer_sessions_tagsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Timer_sessions_tags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {timer_sessions_tagsFindFirstArgs} args - Arguments to find a Timer_sessions_tags
     * @example
     * // Get one Timer_sessions_tags
     * const timer_sessions_tags = await prisma.timer_sessions_tags.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends timer_sessions_tagsFindFirstArgs>(args?: SelectSubset<T, timer_sessions_tagsFindFirstArgs<ExtArgs>>): Prisma__timer_sessions_tagsClient<$Result.GetResult<Prisma.$timer_sessions_tagsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Timer_sessions_tags that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {timer_sessions_tagsFindFirstOrThrowArgs} args - Arguments to find a Timer_sessions_tags
     * @example
     * // Get one Timer_sessions_tags
     * const timer_sessions_tags = await prisma.timer_sessions_tags.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends timer_sessions_tagsFindFirstOrThrowArgs>(args?: SelectSubset<T, timer_sessions_tagsFindFirstOrThrowArgs<ExtArgs>>): Prisma__timer_sessions_tagsClient<$Result.GetResult<Prisma.$timer_sessions_tagsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Timer_sessions_tags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {timer_sessions_tagsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Timer_sessions_tags
     * const timer_sessions_tags = await prisma.timer_sessions_tags.findMany()
     * 
     * // Get first 10 Timer_sessions_tags
     * const timer_sessions_tags = await prisma.timer_sessions_tags.findMany({ take: 10 })
     * 
     * // Only select the `timer_session_id`
     * const timer_sessions_tagsWithTimer_session_idOnly = await prisma.timer_sessions_tags.findMany({ select: { timer_session_id: true } })
     * 
     */
    findMany<T extends timer_sessions_tagsFindManyArgs>(args?: SelectSubset<T, timer_sessions_tagsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$timer_sessions_tagsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Timer_sessions_tags.
     * @param {timer_sessions_tagsCreateArgs} args - Arguments to create a Timer_sessions_tags.
     * @example
     * // Create one Timer_sessions_tags
     * const Timer_sessions_tags = await prisma.timer_sessions_tags.create({
     *   data: {
     *     // ... data to create a Timer_sessions_tags
     *   }
     * })
     * 
     */
    create<T extends timer_sessions_tagsCreateArgs>(args: SelectSubset<T, timer_sessions_tagsCreateArgs<ExtArgs>>): Prisma__timer_sessions_tagsClient<$Result.GetResult<Prisma.$timer_sessions_tagsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Timer_sessions_tags.
     * @param {timer_sessions_tagsCreateManyArgs} args - Arguments to create many Timer_sessions_tags.
     * @example
     * // Create many Timer_sessions_tags
     * const timer_sessions_tags = await prisma.timer_sessions_tags.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends timer_sessions_tagsCreateManyArgs>(args?: SelectSubset<T, timer_sessions_tagsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Timer_sessions_tags and returns the data saved in the database.
     * @param {timer_sessions_tagsCreateManyAndReturnArgs} args - Arguments to create many Timer_sessions_tags.
     * @example
     * // Create many Timer_sessions_tags
     * const timer_sessions_tags = await prisma.timer_sessions_tags.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Timer_sessions_tags and only return the `timer_session_id`
     * const timer_sessions_tagsWithTimer_session_idOnly = await prisma.timer_sessions_tags.createManyAndReturn({
     *   select: { timer_session_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends timer_sessions_tagsCreateManyAndReturnArgs>(args?: SelectSubset<T, timer_sessions_tagsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$timer_sessions_tagsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Timer_sessions_tags.
     * @param {timer_sessions_tagsDeleteArgs} args - Arguments to delete one Timer_sessions_tags.
     * @example
     * // Delete one Timer_sessions_tags
     * const Timer_sessions_tags = await prisma.timer_sessions_tags.delete({
     *   where: {
     *     // ... filter to delete one Timer_sessions_tags
     *   }
     * })
     * 
     */
    delete<T extends timer_sessions_tagsDeleteArgs>(args: SelectSubset<T, timer_sessions_tagsDeleteArgs<ExtArgs>>): Prisma__timer_sessions_tagsClient<$Result.GetResult<Prisma.$timer_sessions_tagsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Timer_sessions_tags.
     * @param {timer_sessions_tagsUpdateArgs} args - Arguments to update one Timer_sessions_tags.
     * @example
     * // Update one Timer_sessions_tags
     * const timer_sessions_tags = await prisma.timer_sessions_tags.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends timer_sessions_tagsUpdateArgs>(args: SelectSubset<T, timer_sessions_tagsUpdateArgs<ExtArgs>>): Prisma__timer_sessions_tagsClient<$Result.GetResult<Prisma.$timer_sessions_tagsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Timer_sessions_tags.
     * @param {timer_sessions_tagsDeleteManyArgs} args - Arguments to filter Timer_sessions_tags to delete.
     * @example
     * // Delete a few Timer_sessions_tags
     * const { count } = await prisma.timer_sessions_tags.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends timer_sessions_tagsDeleteManyArgs>(args?: SelectSubset<T, timer_sessions_tagsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Timer_sessions_tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {timer_sessions_tagsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Timer_sessions_tags
     * const timer_sessions_tags = await prisma.timer_sessions_tags.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends timer_sessions_tagsUpdateManyArgs>(args: SelectSubset<T, timer_sessions_tagsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Timer_sessions_tags and returns the data updated in the database.
     * @param {timer_sessions_tagsUpdateManyAndReturnArgs} args - Arguments to update many Timer_sessions_tags.
     * @example
     * // Update many Timer_sessions_tags
     * const timer_sessions_tags = await prisma.timer_sessions_tags.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Timer_sessions_tags and only return the `timer_session_id`
     * const timer_sessions_tagsWithTimer_session_idOnly = await prisma.timer_sessions_tags.updateManyAndReturn({
     *   select: { timer_session_id: true },
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
    updateManyAndReturn<T extends timer_sessions_tagsUpdateManyAndReturnArgs>(args: SelectSubset<T, timer_sessions_tagsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$timer_sessions_tagsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Timer_sessions_tags.
     * @param {timer_sessions_tagsUpsertArgs} args - Arguments to update or create a Timer_sessions_tags.
     * @example
     * // Update or create a Timer_sessions_tags
     * const timer_sessions_tags = await prisma.timer_sessions_tags.upsert({
     *   create: {
     *     // ... data to create a Timer_sessions_tags
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Timer_sessions_tags we want to update
     *   }
     * })
     */
    upsert<T extends timer_sessions_tagsUpsertArgs>(args: SelectSubset<T, timer_sessions_tagsUpsertArgs<ExtArgs>>): Prisma__timer_sessions_tagsClient<$Result.GetResult<Prisma.$timer_sessions_tagsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Timer_sessions_tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {timer_sessions_tagsCountArgs} args - Arguments to filter Timer_sessions_tags to count.
     * @example
     * // Count the number of Timer_sessions_tags
     * const count = await prisma.timer_sessions_tags.count({
     *   where: {
     *     // ... the filter for the Timer_sessions_tags we want to count
     *   }
     * })
    **/
    count<T extends timer_sessions_tagsCountArgs>(
      args?: Subset<T, timer_sessions_tagsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Timer_sessions_tagsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Timer_sessions_tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Timer_sessions_tagsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Timer_sessions_tagsAggregateArgs>(args: Subset<T, Timer_sessions_tagsAggregateArgs>): Prisma.PrismaPromise<GetTimer_sessions_tagsAggregateType<T>>

    /**
     * Group by Timer_sessions_tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {timer_sessions_tagsGroupByArgs} args - Group by arguments.
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
      T extends timer_sessions_tagsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: timer_sessions_tagsGroupByArgs['orderBy'] }
        : { orderBy?: timer_sessions_tagsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, timer_sessions_tagsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTimer_sessions_tagsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the timer_sessions_tags model
   */
  readonly fields: timer_sessions_tagsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for timer_sessions_tags.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__timer_sessions_tagsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tags<T extends TagDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TagDefaultArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    timer_sessions<T extends TimerSessionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TimerSessionDefaultArgs<ExtArgs>>): Prisma__TimerSessionClient<$Result.GetResult<Prisma.$TimerSessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the timer_sessions_tags model
   */ 
  interface timer_sessions_tagsFieldRefs {
    readonly timer_session_id: FieldRef<"timer_sessions_tags", 'String'>
    readonly tag_id: FieldRef<"timer_sessions_tags", 'String'>
  }
    

  // Custom InputTypes
  /**
   * timer_sessions_tags findUnique
   */
  export type timer_sessions_tagsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the timer_sessions_tags
     */
    select?: timer_sessions_tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the timer_sessions_tags
     */
    omit?: timer_sessions_tagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: timer_sessions_tagsInclude<ExtArgs> | null
    /**
     * Filter, which timer_sessions_tags to fetch.
     */
    where: timer_sessions_tagsWhereUniqueInput
  }

  /**
   * timer_sessions_tags findUniqueOrThrow
   */
  export type timer_sessions_tagsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the timer_sessions_tags
     */
    select?: timer_sessions_tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the timer_sessions_tags
     */
    omit?: timer_sessions_tagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: timer_sessions_tagsInclude<ExtArgs> | null
    /**
     * Filter, which timer_sessions_tags to fetch.
     */
    where: timer_sessions_tagsWhereUniqueInput
  }

  /**
   * timer_sessions_tags findFirst
   */
  export type timer_sessions_tagsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the timer_sessions_tags
     */
    select?: timer_sessions_tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the timer_sessions_tags
     */
    omit?: timer_sessions_tagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: timer_sessions_tagsInclude<ExtArgs> | null
    /**
     * Filter, which timer_sessions_tags to fetch.
     */
    where?: timer_sessions_tagsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of timer_sessions_tags to fetch.
     */
    orderBy?: timer_sessions_tagsOrderByWithRelationInput | timer_sessions_tagsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for timer_sessions_tags.
     */
    cursor?: timer_sessions_tagsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` timer_sessions_tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` timer_sessions_tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of timer_sessions_tags.
     */
    distinct?: Timer_sessions_tagsScalarFieldEnum | Timer_sessions_tagsScalarFieldEnum[]
  }

  /**
   * timer_sessions_tags findFirstOrThrow
   */
  export type timer_sessions_tagsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the timer_sessions_tags
     */
    select?: timer_sessions_tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the timer_sessions_tags
     */
    omit?: timer_sessions_tagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: timer_sessions_tagsInclude<ExtArgs> | null
    /**
     * Filter, which timer_sessions_tags to fetch.
     */
    where?: timer_sessions_tagsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of timer_sessions_tags to fetch.
     */
    orderBy?: timer_sessions_tagsOrderByWithRelationInput | timer_sessions_tagsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for timer_sessions_tags.
     */
    cursor?: timer_sessions_tagsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` timer_sessions_tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` timer_sessions_tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of timer_sessions_tags.
     */
    distinct?: Timer_sessions_tagsScalarFieldEnum | Timer_sessions_tagsScalarFieldEnum[]
  }

  /**
   * timer_sessions_tags findMany
   */
  export type timer_sessions_tagsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the timer_sessions_tags
     */
    select?: timer_sessions_tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the timer_sessions_tags
     */
    omit?: timer_sessions_tagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: timer_sessions_tagsInclude<ExtArgs> | null
    /**
     * Filter, which timer_sessions_tags to fetch.
     */
    where?: timer_sessions_tagsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of timer_sessions_tags to fetch.
     */
    orderBy?: timer_sessions_tagsOrderByWithRelationInput | timer_sessions_tagsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing timer_sessions_tags.
     */
    cursor?: timer_sessions_tagsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` timer_sessions_tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` timer_sessions_tags.
     */
    skip?: number
    distinct?: Timer_sessions_tagsScalarFieldEnum | Timer_sessions_tagsScalarFieldEnum[]
  }

  /**
   * timer_sessions_tags create
   */
  export type timer_sessions_tagsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the timer_sessions_tags
     */
    select?: timer_sessions_tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the timer_sessions_tags
     */
    omit?: timer_sessions_tagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: timer_sessions_tagsInclude<ExtArgs> | null
    /**
     * The data needed to create a timer_sessions_tags.
     */
    data: XOR<timer_sessions_tagsCreateInput, timer_sessions_tagsUncheckedCreateInput>
  }

  /**
   * timer_sessions_tags createMany
   */
  export type timer_sessions_tagsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many timer_sessions_tags.
     */
    data: timer_sessions_tagsCreateManyInput | timer_sessions_tagsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * timer_sessions_tags createManyAndReturn
   */
  export type timer_sessions_tagsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the timer_sessions_tags
     */
    select?: timer_sessions_tagsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the timer_sessions_tags
     */
    omit?: timer_sessions_tagsOmit<ExtArgs> | null
    /**
     * The data used to create many timer_sessions_tags.
     */
    data: timer_sessions_tagsCreateManyInput | timer_sessions_tagsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: timer_sessions_tagsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * timer_sessions_tags update
   */
  export type timer_sessions_tagsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the timer_sessions_tags
     */
    select?: timer_sessions_tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the timer_sessions_tags
     */
    omit?: timer_sessions_tagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: timer_sessions_tagsInclude<ExtArgs> | null
    /**
     * The data needed to update a timer_sessions_tags.
     */
    data: XOR<timer_sessions_tagsUpdateInput, timer_sessions_tagsUncheckedUpdateInput>
    /**
     * Choose, which timer_sessions_tags to update.
     */
    where: timer_sessions_tagsWhereUniqueInput
  }

  /**
   * timer_sessions_tags updateMany
   */
  export type timer_sessions_tagsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update timer_sessions_tags.
     */
    data: XOR<timer_sessions_tagsUpdateManyMutationInput, timer_sessions_tagsUncheckedUpdateManyInput>
    /**
     * Filter which timer_sessions_tags to update
     */
    where?: timer_sessions_tagsWhereInput
    /**
     * Limit how many timer_sessions_tags to update.
     */
    limit?: number
  }

  /**
   * timer_sessions_tags updateManyAndReturn
   */
  export type timer_sessions_tagsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the timer_sessions_tags
     */
    select?: timer_sessions_tagsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the timer_sessions_tags
     */
    omit?: timer_sessions_tagsOmit<ExtArgs> | null
    /**
     * The data used to update timer_sessions_tags.
     */
    data: XOR<timer_sessions_tagsUpdateManyMutationInput, timer_sessions_tagsUncheckedUpdateManyInput>
    /**
     * Filter which timer_sessions_tags to update
     */
    where?: timer_sessions_tagsWhereInput
    /**
     * Limit how many timer_sessions_tags to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: timer_sessions_tagsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * timer_sessions_tags upsert
   */
  export type timer_sessions_tagsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the timer_sessions_tags
     */
    select?: timer_sessions_tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the timer_sessions_tags
     */
    omit?: timer_sessions_tagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: timer_sessions_tagsInclude<ExtArgs> | null
    /**
     * The filter to search for the timer_sessions_tags to update in case it exists.
     */
    where: timer_sessions_tagsWhereUniqueInput
    /**
     * In case the timer_sessions_tags found by the `where` argument doesn't exist, create a new timer_sessions_tags with this data.
     */
    create: XOR<timer_sessions_tagsCreateInput, timer_sessions_tagsUncheckedCreateInput>
    /**
     * In case the timer_sessions_tags was found with the provided `where` argument, update it with this data.
     */
    update: XOR<timer_sessions_tagsUpdateInput, timer_sessions_tagsUncheckedUpdateInput>
  }

  /**
   * timer_sessions_tags delete
   */
  export type timer_sessions_tagsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the timer_sessions_tags
     */
    select?: timer_sessions_tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the timer_sessions_tags
     */
    omit?: timer_sessions_tagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: timer_sessions_tagsInclude<ExtArgs> | null
    /**
     * Filter which timer_sessions_tags to delete.
     */
    where: timer_sessions_tagsWhereUniqueInput
  }

  /**
   * timer_sessions_tags deleteMany
   */
  export type timer_sessions_tagsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which timer_sessions_tags to delete
     */
    where?: timer_sessions_tagsWhereInput
    /**
     * Limit how many timer_sessions_tags to delete.
     */
    limit?: number
  }

  /**
   * timer_sessions_tags without action
   */
  export type timer_sessions_tagsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the timer_sessions_tags
     */
    select?: timer_sessions_tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the timer_sessions_tags
     */
    omit?: timer_sessions_tagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: timer_sessions_tagsInclude<ExtArgs> | null
  }


  /**
   * Model Study
   */

  export type AggregateStudy = {
    _count: StudyCountAggregateOutputType | null
    _avg: StudyAvgAggregateOutputType | null
    _sum: StudySumAggregateOutputType | null
    _min: StudyMinAggregateOutputType | null
    _max: StudyMaxAggregateOutputType | null
  }

  export type StudyAvgAggregateOutputType = {
    seconds: number | null
  }

  export type StudySumAggregateOutputType = {
    seconds: number | null
  }

  export type StudyMinAggregateOutputType = {
    id: string | null
    subject: string | null
    userId: string | null
    seconds: number | null
    isActive: boolean | null
    isPaused: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type StudyMaxAggregateOutputType = {
    id: string | null
    subject: string | null
    userId: string | null
    seconds: number | null
    isActive: boolean | null
    isPaused: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type StudyCountAggregateOutputType = {
    id: number
    subject: number
    userId: number
    seconds: number
    isActive: number
    isPaused: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type StudyAvgAggregateInputType = {
    seconds?: true
  }

  export type StudySumAggregateInputType = {
    seconds?: true
  }

  export type StudyMinAggregateInputType = {
    id?: true
    subject?: true
    userId?: true
    seconds?: true
    isActive?: true
    isPaused?: true
    createdAt?: true
    updatedAt?: true
  }

  export type StudyMaxAggregateInputType = {
    id?: true
    subject?: true
    userId?: true
    seconds?: true
    isActive?: true
    isPaused?: true
    createdAt?: true
    updatedAt?: true
  }

  export type StudyCountAggregateInputType = {
    id?: true
    subject?: true
    userId?: true
    seconds?: true
    isActive?: true
    isPaused?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type StudyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Study to aggregate.
     */
    where?: StudyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Studies to fetch.
     */
    orderBy?: StudyOrderByWithRelationInput | StudyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StudyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Studies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Studies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Studies
    **/
    _count?: true | StudyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StudyAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StudySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StudyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StudyMaxAggregateInputType
  }

  export type GetStudyAggregateType<T extends StudyAggregateArgs> = {
        [P in keyof T & keyof AggregateStudy]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStudy[P]>
      : GetScalarType<T[P], AggregateStudy[P]>
  }




  export type StudyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudyWhereInput
    orderBy?: StudyOrderByWithAggregationInput | StudyOrderByWithAggregationInput[]
    by: StudyScalarFieldEnum[] | StudyScalarFieldEnum
    having?: StudyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StudyCountAggregateInputType | true
    _avg?: StudyAvgAggregateInputType
    _sum?: StudySumAggregateInputType
    _min?: StudyMinAggregateInputType
    _max?: StudyMaxAggregateInputType
  }

  export type StudyGroupByOutputType = {
    id: string
    subject: string
    userId: string
    seconds: number
    isActive: boolean
    isPaused: boolean
    createdAt: Date
    updatedAt: Date
    _count: StudyCountAggregateOutputType | null
    _avg: StudyAvgAggregateOutputType | null
    _sum: StudySumAggregateOutputType | null
    _min: StudyMinAggregateOutputType | null
    _max: StudyMaxAggregateOutputType | null
  }

  type GetStudyGroupByPayload<T extends StudyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StudyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StudyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StudyGroupByOutputType[P]>
            : GetScalarType<T[P], StudyGroupByOutputType[P]>
        }
      >
    >


  export type StudySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    subject?: boolean
    userId?: boolean
    seconds?: boolean
    isActive?: boolean
    isPaused?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["study"]>

  export type StudySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    subject?: boolean
    userId?: boolean
    seconds?: boolean
    isActive?: boolean
    isPaused?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["study"]>

  export type StudySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    subject?: boolean
    userId?: boolean
    seconds?: boolean
    isActive?: boolean
    isPaused?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["study"]>

  export type StudySelectScalar = {
    id?: boolean
    subject?: boolean
    userId?: boolean
    seconds?: boolean
    isActive?: boolean
    isPaused?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type StudyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "subject" | "userId" | "seconds" | "isActive" | "isPaused" | "createdAt" | "updatedAt", ExtArgs["result"]["study"]>
  export type StudyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type StudyIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type StudyIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $StudyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Study"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      subject: string
      userId: string
      seconds: number
      isActive: boolean
      isPaused: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["study"]>
    composites: {}
  }

  type StudyGetPayload<S extends boolean | null | undefined | StudyDefaultArgs> = $Result.GetResult<Prisma.$StudyPayload, S>

  type StudyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StudyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StudyCountAggregateInputType | true
    }

  export interface StudyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Study'], meta: { name: 'Study' } }
    /**
     * Find zero or one Study that matches the filter.
     * @param {StudyFindUniqueArgs} args - Arguments to find a Study
     * @example
     * // Get one Study
     * const study = await prisma.study.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StudyFindUniqueArgs>(args: SelectSubset<T, StudyFindUniqueArgs<ExtArgs>>): Prisma__StudyClient<$Result.GetResult<Prisma.$StudyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Study that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StudyFindUniqueOrThrowArgs} args - Arguments to find a Study
     * @example
     * // Get one Study
     * const study = await prisma.study.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StudyFindUniqueOrThrowArgs>(args: SelectSubset<T, StudyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StudyClient<$Result.GetResult<Prisma.$StudyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Study that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudyFindFirstArgs} args - Arguments to find a Study
     * @example
     * // Get one Study
     * const study = await prisma.study.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StudyFindFirstArgs>(args?: SelectSubset<T, StudyFindFirstArgs<ExtArgs>>): Prisma__StudyClient<$Result.GetResult<Prisma.$StudyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Study that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudyFindFirstOrThrowArgs} args - Arguments to find a Study
     * @example
     * // Get one Study
     * const study = await prisma.study.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StudyFindFirstOrThrowArgs>(args?: SelectSubset<T, StudyFindFirstOrThrowArgs<ExtArgs>>): Prisma__StudyClient<$Result.GetResult<Prisma.$StudyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Studies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Studies
     * const studies = await prisma.study.findMany()
     * 
     * // Get first 10 Studies
     * const studies = await prisma.study.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const studyWithIdOnly = await prisma.study.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StudyFindManyArgs>(args?: SelectSubset<T, StudyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Study.
     * @param {StudyCreateArgs} args - Arguments to create a Study.
     * @example
     * // Create one Study
     * const Study = await prisma.study.create({
     *   data: {
     *     // ... data to create a Study
     *   }
     * })
     * 
     */
    create<T extends StudyCreateArgs>(args: SelectSubset<T, StudyCreateArgs<ExtArgs>>): Prisma__StudyClient<$Result.GetResult<Prisma.$StudyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Studies.
     * @param {StudyCreateManyArgs} args - Arguments to create many Studies.
     * @example
     * // Create many Studies
     * const study = await prisma.study.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StudyCreateManyArgs>(args?: SelectSubset<T, StudyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Studies and returns the data saved in the database.
     * @param {StudyCreateManyAndReturnArgs} args - Arguments to create many Studies.
     * @example
     * // Create many Studies
     * const study = await prisma.study.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Studies and only return the `id`
     * const studyWithIdOnly = await prisma.study.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StudyCreateManyAndReturnArgs>(args?: SelectSubset<T, StudyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Study.
     * @param {StudyDeleteArgs} args - Arguments to delete one Study.
     * @example
     * // Delete one Study
     * const Study = await prisma.study.delete({
     *   where: {
     *     // ... filter to delete one Study
     *   }
     * })
     * 
     */
    delete<T extends StudyDeleteArgs>(args: SelectSubset<T, StudyDeleteArgs<ExtArgs>>): Prisma__StudyClient<$Result.GetResult<Prisma.$StudyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Study.
     * @param {StudyUpdateArgs} args - Arguments to update one Study.
     * @example
     * // Update one Study
     * const study = await prisma.study.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StudyUpdateArgs>(args: SelectSubset<T, StudyUpdateArgs<ExtArgs>>): Prisma__StudyClient<$Result.GetResult<Prisma.$StudyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Studies.
     * @param {StudyDeleteManyArgs} args - Arguments to filter Studies to delete.
     * @example
     * // Delete a few Studies
     * const { count } = await prisma.study.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StudyDeleteManyArgs>(args?: SelectSubset<T, StudyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Studies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Studies
     * const study = await prisma.study.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StudyUpdateManyArgs>(args: SelectSubset<T, StudyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Studies and returns the data updated in the database.
     * @param {StudyUpdateManyAndReturnArgs} args - Arguments to update many Studies.
     * @example
     * // Update many Studies
     * const study = await prisma.study.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Studies and only return the `id`
     * const studyWithIdOnly = await prisma.study.updateManyAndReturn({
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
    updateManyAndReturn<T extends StudyUpdateManyAndReturnArgs>(args: SelectSubset<T, StudyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Study.
     * @param {StudyUpsertArgs} args - Arguments to update or create a Study.
     * @example
     * // Update or create a Study
     * const study = await prisma.study.upsert({
     *   create: {
     *     // ... data to create a Study
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Study we want to update
     *   }
     * })
     */
    upsert<T extends StudyUpsertArgs>(args: SelectSubset<T, StudyUpsertArgs<ExtArgs>>): Prisma__StudyClient<$Result.GetResult<Prisma.$StudyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Studies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudyCountArgs} args - Arguments to filter Studies to count.
     * @example
     * // Count the number of Studies
     * const count = await prisma.study.count({
     *   where: {
     *     // ... the filter for the Studies we want to count
     *   }
     * })
    **/
    count<T extends StudyCountArgs>(
      args?: Subset<T, StudyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StudyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Study.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StudyAggregateArgs>(args: Subset<T, StudyAggregateArgs>): Prisma.PrismaPromise<GetStudyAggregateType<T>>

    /**
     * Group by Study.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudyGroupByArgs} args - Group by arguments.
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
      T extends StudyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StudyGroupByArgs['orderBy'] }
        : { orderBy?: StudyGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, StudyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStudyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Study model
   */
  readonly fields: StudyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Study.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StudyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Study model
   */ 
  interface StudyFieldRefs {
    readonly id: FieldRef<"Study", 'String'>
    readonly subject: FieldRef<"Study", 'String'>
    readonly userId: FieldRef<"Study", 'String'>
    readonly seconds: FieldRef<"Study", 'Int'>
    readonly isActive: FieldRef<"Study", 'Boolean'>
    readonly isPaused: FieldRef<"Study", 'Boolean'>
    readonly createdAt: FieldRef<"Study", 'DateTime'>
    readonly updatedAt: FieldRef<"Study", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Study findUnique
   */
  export type StudyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Study
     */
    select?: StudySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Study
     */
    omit?: StudyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudyInclude<ExtArgs> | null
    /**
     * Filter, which Study to fetch.
     */
    where: StudyWhereUniqueInput
  }

  /**
   * Study findUniqueOrThrow
   */
  export type StudyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Study
     */
    select?: StudySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Study
     */
    omit?: StudyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudyInclude<ExtArgs> | null
    /**
     * Filter, which Study to fetch.
     */
    where: StudyWhereUniqueInput
  }

  /**
   * Study findFirst
   */
  export type StudyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Study
     */
    select?: StudySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Study
     */
    omit?: StudyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudyInclude<ExtArgs> | null
    /**
     * Filter, which Study to fetch.
     */
    where?: StudyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Studies to fetch.
     */
    orderBy?: StudyOrderByWithRelationInput | StudyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Studies.
     */
    cursor?: StudyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Studies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Studies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Studies.
     */
    distinct?: StudyScalarFieldEnum | StudyScalarFieldEnum[]
  }

  /**
   * Study findFirstOrThrow
   */
  export type StudyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Study
     */
    select?: StudySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Study
     */
    omit?: StudyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudyInclude<ExtArgs> | null
    /**
     * Filter, which Study to fetch.
     */
    where?: StudyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Studies to fetch.
     */
    orderBy?: StudyOrderByWithRelationInput | StudyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Studies.
     */
    cursor?: StudyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Studies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Studies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Studies.
     */
    distinct?: StudyScalarFieldEnum | StudyScalarFieldEnum[]
  }

  /**
   * Study findMany
   */
  export type StudyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Study
     */
    select?: StudySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Study
     */
    omit?: StudyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudyInclude<ExtArgs> | null
    /**
     * Filter, which Studies to fetch.
     */
    where?: StudyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Studies to fetch.
     */
    orderBy?: StudyOrderByWithRelationInput | StudyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Studies.
     */
    cursor?: StudyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Studies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Studies.
     */
    skip?: number
    distinct?: StudyScalarFieldEnum | StudyScalarFieldEnum[]
  }

  /**
   * Study create
   */
  export type StudyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Study
     */
    select?: StudySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Study
     */
    omit?: StudyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudyInclude<ExtArgs> | null
    /**
     * The data needed to create a Study.
     */
    data: XOR<StudyCreateInput, StudyUncheckedCreateInput>
  }

  /**
   * Study createMany
   */
  export type StudyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Studies.
     */
    data: StudyCreateManyInput | StudyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Study createManyAndReturn
   */
  export type StudyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Study
     */
    select?: StudySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Study
     */
    omit?: StudyOmit<ExtArgs> | null
    /**
     * The data used to create many Studies.
     */
    data: StudyCreateManyInput | StudyCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudyIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Study update
   */
  export type StudyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Study
     */
    select?: StudySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Study
     */
    omit?: StudyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudyInclude<ExtArgs> | null
    /**
     * The data needed to update a Study.
     */
    data: XOR<StudyUpdateInput, StudyUncheckedUpdateInput>
    /**
     * Choose, which Study to update.
     */
    where: StudyWhereUniqueInput
  }

  /**
   * Study updateMany
   */
  export type StudyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Studies.
     */
    data: XOR<StudyUpdateManyMutationInput, StudyUncheckedUpdateManyInput>
    /**
     * Filter which Studies to update
     */
    where?: StudyWhereInput
    /**
     * Limit how many Studies to update.
     */
    limit?: number
  }

  /**
   * Study updateManyAndReturn
   */
  export type StudyUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Study
     */
    select?: StudySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Study
     */
    omit?: StudyOmit<ExtArgs> | null
    /**
     * The data used to update Studies.
     */
    data: XOR<StudyUpdateManyMutationInput, StudyUncheckedUpdateManyInput>
    /**
     * Filter which Studies to update
     */
    where?: StudyWhereInput
    /**
     * Limit how many Studies to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudyIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Study upsert
   */
  export type StudyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Study
     */
    select?: StudySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Study
     */
    omit?: StudyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudyInclude<ExtArgs> | null
    /**
     * The filter to search for the Study to update in case it exists.
     */
    where: StudyWhereUniqueInput
    /**
     * In case the Study found by the `where` argument doesn't exist, create a new Study with this data.
     */
    create: XOR<StudyCreateInput, StudyUncheckedCreateInput>
    /**
     * In case the Study was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StudyUpdateInput, StudyUncheckedUpdateInput>
  }

  /**
   * Study delete
   */
  export type StudyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Study
     */
    select?: StudySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Study
     */
    omit?: StudyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudyInclude<ExtArgs> | null
    /**
     * Filter which Study to delete.
     */
    where: StudyWhereUniqueInput
  }

  /**
   * Study deleteMany
   */
  export type StudyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Studies to delete
     */
    where?: StudyWhereInput
    /**
     * Limit how many Studies to delete.
     */
    limit?: number
  }

  /**
   * Study without action
   */
  export type StudyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Study
     */
    select?: StudySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Study
     */
    omit?: StudyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudyInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const TimerSessionScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    seconds: 'seconds',
    startedAt: 'startedAt',
    endedAt: 'endedAt',
    userId: 'userId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TimerSessionScalarFieldEnum = (typeof TimerSessionScalarFieldEnum)[keyof typeof TimerSessionScalarFieldEnum]


  export const TagScalarFieldEnum: {
    id: 'id',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TagScalarFieldEnum = (typeof TagScalarFieldEnum)[keyof typeof TagScalarFieldEnum]


  export const Timer_sessions_tagsScalarFieldEnum: {
    timer_session_id: 'timer_session_id',
    tag_id: 'tag_id'
  };

  export type Timer_sessions_tagsScalarFieldEnum = (typeof Timer_sessions_tagsScalarFieldEnum)[keyof typeof Timer_sessions_tagsScalarFieldEnum]


  export const StudyScalarFieldEnum: {
    id: 'id',
    subject: 'subject',
    userId: 'userId',
    seconds: 'seconds',
    isActive: 'isActive',
    isPaused: 'isPaused',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type StudyScalarFieldEnum = (typeof StudyScalarFieldEnum)[keyof typeof StudyScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


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
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: UuidFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    timerSessions?: TimerSessionListRelationFilter
    studies?: StudyListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    timerSessions?: TimerSessionOrderByRelationAggregateInput
    studies?: StudyOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    timerSessions?: TimerSessionListRelationFilter
    studies?: StudyListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
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
    id?: UuidWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type TimerSessionWhereInput = {
    AND?: TimerSessionWhereInput | TimerSessionWhereInput[]
    OR?: TimerSessionWhereInput[]
    NOT?: TimerSessionWhereInput | TimerSessionWhereInput[]
    id?: UuidFilter<"TimerSession"> | string
    title?: StringFilter<"TimerSession"> | string
    description?: StringNullableFilter<"TimerSession"> | string | null
    seconds?: IntFilter<"TimerSession"> | number
    startedAt?: DateTimeFilter<"TimerSession"> | Date | string
    endedAt?: DateTimeNullableFilter<"TimerSession"> | Date | string | null
    userId?: UuidFilter<"TimerSession"> | string
    createdAt?: DateTimeFilter<"TimerSession"> | Date | string
    updatedAt?: DateTimeFilter<"TimerSession"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    timer_sessions_tags?: Timer_sessions_tagsListRelationFilter
  }

  export type TimerSessionOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    seconds?: SortOrder
    startedAt?: SortOrder
    endedAt?: SortOrderInput | SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    timer_sessions_tags?: timer_sessions_tagsOrderByRelationAggregateInput
  }

  export type TimerSessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TimerSessionWhereInput | TimerSessionWhereInput[]
    OR?: TimerSessionWhereInput[]
    NOT?: TimerSessionWhereInput | TimerSessionWhereInput[]
    title?: StringFilter<"TimerSession"> | string
    description?: StringNullableFilter<"TimerSession"> | string | null
    seconds?: IntFilter<"TimerSession"> | number
    startedAt?: DateTimeFilter<"TimerSession"> | Date | string
    endedAt?: DateTimeNullableFilter<"TimerSession"> | Date | string | null
    userId?: UuidFilter<"TimerSession"> | string
    createdAt?: DateTimeFilter<"TimerSession"> | Date | string
    updatedAt?: DateTimeFilter<"TimerSession"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    timer_sessions_tags?: Timer_sessions_tagsListRelationFilter
  }, "id">

  export type TimerSessionOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    seconds?: SortOrder
    startedAt?: SortOrder
    endedAt?: SortOrderInput | SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TimerSessionCountOrderByAggregateInput
    _avg?: TimerSessionAvgOrderByAggregateInput
    _max?: TimerSessionMaxOrderByAggregateInput
    _min?: TimerSessionMinOrderByAggregateInput
    _sum?: TimerSessionSumOrderByAggregateInput
  }

  export type TimerSessionScalarWhereWithAggregatesInput = {
    AND?: TimerSessionScalarWhereWithAggregatesInput | TimerSessionScalarWhereWithAggregatesInput[]
    OR?: TimerSessionScalarWhereWithAggregatesInput[]
    NOT?: TimerSessionScalarWhereWithAggregatesInput | TimerSessionScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"TimerSession"> | string
    title?: StringWithAggregatesFilter<"TimerSession"> | string
    description?: StringNullableWithAggregatesFilter<"TimerSession"> | string | null
    seconds?: IntWithAggregatesFilter<"TimerSession"> | number
    startedAt?: DateTimeWithAggregatesFilter<"TimerSession"> | Date | string
    endedAt?: DateTimeNullableWithAggregatesFilter<"TimerSession"> | Date | string | null
    userId?: UuidWithAggregatesFilter<"TimerSession"> | string
    createdAt?: DateTimeWithAggregatesFilter<"TimerSession"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"TimerSession"> | Date | string
  }

  export type TagWhereInput = {
    AND?: TagWhereInput | TagWhereInput[]
    OR?: TagWhereInput[]
    NOT?: TagWhereInput | TagWhereInput[]
    id?: UuidFilter<"Tag"> | string
    name?: StringFilter<"Tag"> | string
    createdAt?: DateTimeFilter<"Tag"> | Date | string
    updatedAt?: DateTimeFilter<"Tag"> | Date | string
    timer_sessions_tags?: Timer_sessions_tagsListRelationFilter
  }

  export type TagOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    timer_sessions_tags?: timer_sessions_tagsOrderByRelationAggregateInput
  }

  export type TagWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: TagWhereInput | TagWhereInput[]
    OR?: TagWhereInput[]
    NOT?: TagWhereInput | TagWhereInput[]
    createdAt?: DateTimeFilter<"Tag"> | Date | string
    updatedAt?: DateTimeFilter<"Tag"> | Date | string
    timer_sessions_tags?: Timer_sessions_tagsListRelationFilter
  }, "id" | "name">

  export type TagOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TagCountOrderByAggregateInput
    _max?: TagMaxOrderByAggregateInput
    _min?: TagMinOrderByAggregateInput
  }

  export type TagScalarWhereWithAggregatesInput = {
    AND?: TagScalarWhereWithAggregatesInput | TagScalarWhereWithAggregatesInput[]
    OR?: TagScalarWhereWithAggregatesInput[]
    NOT?: TagScalarWhereWithAggregatesInput | TagScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Tag"> | string
    name?: StringWithAggregatesFilter<"Tag"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Tag"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Tag"> | Date | string
  }

  export type timer_sessions_tagsWhereInput = {
    AND?: timer_sessions_tagsWhereInput | timer_sessions_tagsWhereInput[]
    OR?: timer_sessions_tagsWhereInput[]
    NOT?: timer_sessions_tagsWhereInput | timer_sessions_tagsWhereInput[]
    timer_session_id?: UuidFilter<"timer_sessions_tags"> | string
    tag_id?: UuidFilter<"timer_sessions_tags"> | string
    tags?: XOR<TagScalarRelationFilter, TagWhereInput>
    timer_sessions?: XOR<TimerSessionScalarRelationFilter, TimerSessionWhereInput>
  }

  export type timer_sessions_tagsOrderByWithRelationInput = {
    timer_session_id?: SortOrder
    tag_id?: SortOrder
    tags?: TagOrderByWithRelationInput
    timer_sessions?: TimerSessionOrderByWithRelationInput
  }

  export type timer_sessions_tagsWhereUniqueInput = Prisma.AtLeast<{
    timer_session_id_tag_id?: timer_sessions_tagsTimer_session_idTag_idCompoundUniqueInput
    AND?: timer_sessions_tagsWhereInput | timer_sessions_tagsWhereInput[]
    OR?: timer_sessions_tagsWhereInput[]
    NOT?: timer_sessions_tagsWhereInput | timer_sessions_tagsWhereInput[]
    timer_session_id?: UuidFilter<"timer_sessions_tags"> | string
    tag_id?: UuidFilter<"timer_sessions_tags"> | string
    tags?: XOR<TagScalarRelationFilter, TagWhereInput>
    timer_sessions?: XOR<TimerSessionScalarRelationFilter, TimerSessionWhereInput>
  }, "timer_session_id_tag_id">

  export type timer_sessions_tagsOrderByWithAggregationInput = {
    timer_session_id?: SortOrder
    tag_id?: SortOrder
    _count?: timer_sessions_tagsCountOrderByAggregateInput
    _max?: timer_sessions_tagsMaxOrderByAggregateInput
    _min?: timer_sessions_tagsMinOrderByAggregateInput
  }

  export type timer_sessions_tagsScalarWhereWithAggregatesInput = {
    AND?: timer_sessions_tagsScalarWhereWithAggregatesInput | timer_sessions_tagsScalarWhereWithAggregatesInput[]
    OR?: timer_sessions_tagsScalarWhereWithAggregatesInput[]
    NOT?: timer_sessions_tagsScalarWhereWithAggregatesInput | timer_sessions_tagsScalarWhereWithAggregatesInput[]
    timer_session_id?: UuidWithAggregatesFilter<"timer_sessions_tags"> | string
    tag_id?: UuidWithAggregatesFilter<"timer_sessions_tags"> | string
  }

  export type StudyWhereInput = {
    AND?: StudyWhereInput | StudyWhereInput[]
    OR?: StudyWhereInput[]
    NOT?: StudyWhereInput | StudyWhereInput[]
    id?: UuidFilter<"Study"> | string
    subject?: StringFilter<"Study"> | string
    userId?: UuidFilter<"Study"> | string
    seconds?: IntFilter<"Study"> | number
    isActive?: BoolFilter<"Study"> | boolean
    isPaused?: BoolFilter<"Study"> | boolean
    createdAt?: DateTimeFilter<"Study"> | Date | string
    updatedAt?: DateTimeFilter<"Study"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type StudyOrderByWithRelationInput = {
    id?: SortOrder
    subject?: SortOrder
    userId?: SortOrder
    seconds?: SortOrder
    isActive?: SortOrder
    isPaused?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type StudyWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: StudyWhereInput | StudyWhereInput[]
    OR?: StudyWhereInput[]
    NOT?: StudyWhereInput | StudyWhereInput[]
    subject?: StringFilter<"Study"> | string
    userId?: UuidFilter<"Study"> | string
    seconds?: IntFilter<"Study"> | number
    isActive?: BoolFilter<"Study"> | boolean
    isPaused?: BoolFilter<"Study"> | boolean
    createdAt?: DateTimeFilter<"Study"> | Date | string
    updatedAt?: DateTimeFilter<"Study"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type StudyOrderByWithAggregationInput = {
    id?: SortOrder
    subject?: SortOrder
    userId?: SortOrder
    seconds?: SortOrder
    isActive?: SortOrder
    isPaused?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: StudyCountOrderByAggregateInput
    _avg?: StudyAvgOrderByAggregateInput
    _max?: StudyMaxOrderByAggregateInput
    _min?: StudyMinOrderByAggregateInput
    _sum?: StudySumOrderByAggregateInput
  }

  export type StudyScalarWhereWithAggregatesInput = {
    AND?: StudyScalarWhereWithAggregatesInput | StudyScalarWhereWithAggregatesInput[]
    OR?: StudyScalarWhereWithAggregatesInput[]
    NOT?: StudyScalarWhereWithAggregatesInput | StudyScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Study"> | string
    subject?: StringWithAggregatesFilter<"Study"> | string
    userId?: UuidWithAggregatesFilter<"Study"> | string
    seconds?: IntWithAggregatesFilter<"Study"> | number
    isActive?: BoolWithAggregatesFilter<"Study"> | boolean
    isPaused?: BoolWithAggregatesFilter<"Study"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Study"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Study"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    name: string
    email: string
    createdAt?: Date | string
    updatedAt?: Date | string
    timerSessions?: TimerSessionCreateNestedManyWithoutUserInput
    studies?: StudyCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    createdAt?: Date | string
    updatedAt?: Date | string
    timerSessions?: TimerSessionUncheckedCreateNestedManyWithoutUserInput
    studies?: StudyUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    timerSessions?: TimerSessionUpdateManyWithoutUserNestedInput
    studies?: StudyUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    timerSessions?: TimerSessionUncheckedUpdateManyWithoutUserNestedInput
    studies?: StudyUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name: string
    email: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TimerSessionCreateInput = {
    id?: string
    title: string
    description?: string | null
    seconds?: number
    startedAt?: Date | string
    endedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutTimerSessionsInput
    timer_sessions_tags?: timer_sessions_tagsCreateNestedManyWithoutTimer_sessionsInput
  }

  export type TimerSessionUncheckedCreateInput = {
    id?: string
    title: string
    description?: string | null
    seconds?: number
    startedAt?: Date | string
    endedAt?: Date | string | null
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    timer_sessions_tags?: timer_sessions_tagsUncheckedCreateNestedManyWithoutTimer_sessionsInput
  }

  export type TimerSessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    seconds?: IntFieldUpdateOperationsInput | number
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutTimerSessionsNestedInput
    timer_sessions_tags?: timer_sessions_tagsUpdateManyWithoutTimer_sessionsNestedInput
  }

  export type TimerSessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    seconds?: IntFieldUpdateOperationsInput | number
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    timer_sessions_tags?: timer_sessions_tagsUncheckedUpdateManyWithoutTimer_sessionsNestedInput
  }

  export type TimerSessionCreateManyInput = {
    id?: string
    title: string
    description?: string | null
    seconds?: number
    startedAt?: Date | string
    endedAt?: Date | string | null
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TimerSessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    seconds?: IntFieldUpdateOperationsInput | number
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TimerSessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    seconds?: IntFieldUpdateOperationsInput | number
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TagCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    timer_sessions_tags?: timer_sessions_tagsCreateNestedManyWithoutTagsInput
  }

  export type TagUncheckedCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    timer_sessions_tags?: timer_sessions_tagsUncheckedCreateNestedManyWithoutTagsInput
  }

  export type TagUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    timer_sessions_tags?: timer_sessions_tagsUpdateManyWithoutTagsNestedInput
  }

  export type TagUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    timer_sessions_tags?: timer_sessions_tagsUncheckedUpdateManyWithoutTagsNestedInput
  }

  export type TagCreateManyInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TagUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TagUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type timer_sessions_tagsCreateInput = {
    tags: TagCreateNestedOneWithoutTimer_sessions_tagsInput
    timer_sessions: TimerSessionCreateNestedOneWithoutTimer_sessions_tagsInput
  }

  export type timer_sessions_tagsUncheckedCreateInput = {
    timer_session_id: string
    tag_id: string
  }

  export type timer_sessions_tagsUpdateInput = {
    tags?: TagUpdateOneRequiredWithoutTimer_sessions_tagsNestedInput
    timer_sessions?: TimerSessionUpdateOneRequiredWithoutTimer_sessions_tagsNestedInput
  }

  export type timer_sessions_tagsUncheckedUpdateInput = {
    timer_session_id?: StringFieldUpdateOperationsInput | string
    tag_id?: StringFieldUpdateOperationsInput | string
  }

  export type timer_sessions_tagsCreateManyInput = {
    timer_session_id: string
    tag_id: string
  }

  export type timer_sessions_tagsUpdateManyMutationInput = {

  }

  export type timer_sessions_tagsUncheckedUpdateManyInput = {
    timer_session_id?: StringFieldUpdateOperationsInput | string
    tag_id?: StringFieldUpdateOperationsInput | string
  }

  export type StudyCreateInput = {
    id?: string
    subject: string
    seconds?: number
    isActive?: boolean
    isPaused?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutStudiesInput
  }

  export type StudyUncheckedCreateInput = {
    id?: string
    subject: string
    userId: string
    seconds?: number
    isActive?: boolean
    isPaused?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StudyUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    seconds?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isPaused?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutStudiesNestedInput
  }

  export type StudyUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    seconds?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isPaused?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudyCreateManyInput = {
    id?: string
    subject: string
    userId: string
    seconds?: number
    isActive?: boolean
    isPaused?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StudyUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    seconds?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isPaused?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudyUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    seconds?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isPaused?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type TimerSessionListRelationFilter = {
    every?: TimerSessionWhereInput
    some?: TimerSessionWhereInput
    none?: TimerSessionWhereInput
  }

  export type StudyListRelationFilter = {
    every?: StudyWhereInput
    some?: StudyWhereInput
    none?: StudyWhereInput
  }

  export type TimerSessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StudyOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type Timer_sessions_tagsListRelationFilter = {
    every?: timer_sessions_tagsWhereInput
    some?: timer_sessions_tagsWhereInput
    none?: timer_sessions_tagsWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type timer_sessions_tagsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TimerSessionCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    seconds?: SortOrder
    startedAt?: SortOrder
    endedAt?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TimerSessionAvgOrderByAggregateInput = {
    seconds?: SortOrder
  }

  export type TimerSessionMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    seconds?: SortOrder
    startedAt?: SortOrder
    endedAt?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TimerSessionMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    seconds?: SortOrder
    startedAt?: SortOrder
    endedAt?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TimerSessionSumOrderByAggregateInput = {
    seconds?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type TagCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TagMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TagMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TagScalarRelationFilter = {
    is?: TagWhereInput
    isNot?: TagWhereInput
  }

  export type TimerSessionScalarRelationFilter = {
    is?: TimerSessionWhereInput
    isNot?: TimerSessionWhereInput
  }

  export type timer_sessions_tagsTimer_session_idTag_idCompoundUniqueInput = {
    timer_session_id: string
    tag_id: string
  }

  export type timer_sessions_tagsCountOrderByAggregateInput = {
    timer_session_id?: SortOrder
    tag_id?: SortOrder
  }

  export type timer_sessions_tagsMaxOrderByAggregateInput = {
    timer_session_id?: SortOrder
    tag_id?: SortOrder
  }

  export type timer_sessions_tagsMinOrderByAggregateInput = {
    timer_session_id?: SortOrder
    tag_id?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type StudyCountOrderByAggregateInput = {
    id?: SortOrder
    subject?: SortOrder
    userId?: SortOrder
    seconds?: SortOrder
    isActive?: SortOrder
    isPaused?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StudyAvgOrderByAggregateInput = {
    seconds?: SortOrder
  }

  export type StudyMaxOrderByAggregateInput = {
    id?: SortOrder
    subject?: SortOrder
    userId?: SortOrder
    seconds?: SortOrder
    isActive?: SortOrder
    isPaused?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StudyMinOrderByAggregateInput = {
    id?: SortOrder
    subject?: SortOrder
    userId?: SortOrder
    seconds?: SortOrder
    isActive?: SortOrder
    isPaused?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StudySumOrderByAggregateInput = {
    seconds?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type TimerSessionCreateNestedManyWithoutUserInput = {
    create?: XOR<TimerSessionCreateWithoutUserInput, TimerSessionUncheckedCreateWithoutUserInput> | TimerSessionCreateWithoutUserInput[] | TimerSessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TimerSessionCreateOrConnectWithoutUserInput | TimerSessionCreateOrConnectWithoutUserInput[]
    createMany?: TimerSessionCreateManyUserInputEnvelope
    connect?: TimerSessionWhereUniqueInput | TimerSessionWhereUniqueInput[]
  }

  export type StudyCreateNestedManyWithoutUserInput = {
    create?: XOR<StudyCreateWithoutUserInput, StudyUncheckedCreateWithoutUserInput> | StudyCreateWithoutUserInput[] | StudyUncheckedCreateWithoutUserInput[]
    connectOrCreate?: StudyCreateOrConnectWithoutUserInput | StudyCreateOrConnectWithoutUserInput[]
    createMany?: StudyCreateManyUserInputEnvelope
    connect?: StudyWhereUniqueInput | StudyWhereUniqueInput[]
  }

  export type TimerSessionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<TimerSessionCreateWithoutUserInput, TimerSessionUncheckedCreateWithoutUserInput> | TimerSessionCreateWithoutUserInput[] | TimerSessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TimerSessionCreateOrConnectWithoutUserInput | TimerSessionCreateOrConnectWithoutUserInput[]
    createMany?: TimerSessionCreateManyUserInputEnvelope
    connect?: TimerSessionWhereUniqueInput | TimerSessionWhereUniqueInput[]
  }

  export type StudyUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<StudyCreateWithoutUserInput, StudyUncheckedCreateWithoutUserInput> | StudyCreateWithoutUserInput[] | StudyUncheckedCreateWithoutUserInput[]
    connectOrCreate?: StudyCreateOrConnectWithoutUserInput | StudyCreateOrConnectWithoutUserInput[]
    createMany?: StudyCreateManyUserInputEnvelope
    connect?: StudyWhereUniqueInput | StudyWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type TimerSessionUpdateManyWithoutUserNestedInput = {
    create?: XOR<TimerSessionCreateWithoutUserInput, TimerSessionUncheckedCreateWithoutUserInput> | TimerSessionCreateWithoutUserInput[] | TimerSessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TimerSessionCreateOrConnectWithoutUserInput | TimerSessionCreateOrConnectWithoutUserInput[]
    upsert?: TimerSessionUpsertWithWhereUniqueWithoutUserInput | TimerSessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TimerSessionCreateManyUserInputEnvelope
    set?: TimerSessionWhereUniqueInput | TimerSessionWhereUniqueInput[]
    disconnect?: TimerSessionWhereUniqueInput | TimerSessionWhereUniqueInput[]
    delete?: TimerSessionWhereUniqueInput | TimerSessionWhereUniqueInput[]
    connect?: TimerSessionWhereUniqueInput | TimerSessionWhereUniqueInput[]
    update?: TimerSessionUpdateWithWhereUniqueWithoutUserInput | TimerSessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TimerSessionUpdateManyWithWhereWithoutUserInput | TimerSessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TimerSessionScalarWhereInput | TimerSessionScalarWhereInput[]
  }

  export type StudyUpdateManyWithoutUserNestedInput = {
    create?: XOR<StudyCreateWithoutUserInput, StudyUncheckedCreateWithoutUserInput> | StudyCreateWithoutUserInput[] | StudyUncheckedCreateWithoutUserInput[]
    connectOrCreate?: StudyCreateOrConnectWithoutUserInput | StudyCreateOrConnectWithoutUserInput[]
    upsert?: StudyUpsertWithWhereUniqueWithoutUserInput | StudyUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: StudyCreateManyUserInputEnvelope
    set?: StudyWhereUniqueInput | StudyWhereUniqueInput[]
    disconnect?: StudyWhereUniqueInput | StudyWhereUniqueInput[]
    delete?: StudyWhereUniqueInput | StudyWhereUniqueInput[]
    connect?: StudyWhereUniqueInput | StudyWhereUniqueInput[]
    update?: StudyUpdateWithWhereUniqueWithoutUserInput | StudyUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: StudyUpdateManyWithWhereWithoutUserInput | StudyUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: StudyScalarWhereInput | StudyScalarWhereInput[]
  }

  export type TimerSessionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<TimerSessionCreateWithoutUserInput, TimerSessionUncheckedCreateWithoutUserInput> | TimerSessionCreateWithoutUserInput[] | TimerSessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TimerSessionCreateOrConnectWithoutUserInput | TimerSessionCreateOrConnectWithoutUserInput[]
    upsert?: TimerSessionUpsertWithWhereUniqueWithoutUserInput | TimerSessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TimerSessionCreateManyUserInputEnvelope
    set?: TimerSessionWhereUniqueInput | TimerSessionWhereUniqueInput[]
    disconnect?: TimerSessionWhereUniqueInput | TimerSessionWhereUniqueInput[]
    delete?: TimerSessionWhereUniqueInput | TimerSessionWhereUniqueInput[]
    connect?: TimerSessionWhereUniqueInput | TimerSessionWhereUniqueInput[]
    update?: TimerSessionUpdateWithWhereUniqueWithoutUserInput | TimerSessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TimerSessionUpdateManyWithWhereWithoutUserInput | TimerSessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TimerSessionScalarWhereInput | TimerSessionScalarWhereInput[]
  }

  export type StudyUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<StudyCreateWithoutUserInput, StudyUncheckedCreateWithoutUserInput> | StudyCreateWithoutUserInput[] | StudyUncheckedCreateWithoutUserInput[]
    connectOrCreate?: StudyCreateOrConnectWithoutUserInput | StudyCreateOrConnectWithoutUserInput[]
    upsert?: StudyUpsertWithWhereUniqueWithoutUserInput | StudyUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: StudyCreateManyUserInputEnvelope
    set?: StudyWhereUniqueInput | StudyWhereUniqueInput[]
    disconnect?: StudyWhereUniqueInput | StudyWhereUniqueInput[]
    delete?: StudyWhereUniqueInput | StudyWhereUniqueInput[]
    connect?: StudyWhereUniqueInput | StudyWhereUniqueInput[]
    update?: StudyUpdateWithWhereUniqueWithoutUserInput | StudyUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: StudyUpdateManyWithWhereWithoutUserInput | StudyUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: StudyScalarWhereInput | StudyScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutTimerSessionsInput = {
    create?: XOR<UserCreateWithoutTimerSessionsInput, UserUncheckedCreateWithoutTimerSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutTimerSessionsInput
    connect?: UserWhereUniqueInput
  }

  export type timer_sessions_tagsCreateNestedManyWithoutTimer_sessionsInput = {
    create?: XOR<timer_sessions_tagsCreateWithoutTimer_sessionsInput, timer_sessions_tagsUncheckedCreateWithoutTimer_sessionsInput> | timer_sessions_tagsCreateWithoutTimer_sessionsInput[] | timer_sessions_tagsUncheckedCreateWithoutTimer_sessionsInput[]
    connectOrCreate?: timer_sessions_tagsCreateOrConnectWithoutTimer_sessionsInput | timer_sessions_tagsCreateOrConnectWithoutTimer_sessionsInput[]
    createMany?: timer_sessions_tagsCreateManyTimer_sessionsInputEnvelope
    connect?: timer_sessions_tagsWhereUniqueInput | timer_sessions_tagsWhereUniqueInput[]
  }

  export type timer_sessions_tagsUncheckedCreateNestedManyWithoutTimer_sessionsInput = {
    create?: XOR<timer_sessions_tagsCreateWithoutTimer_sessionsInput, timer_sessions_tagsUncheckedCreateWithoutTimer_sessionsInput> | timer_sessions_tagsCreateWithoutTimer_sessionsInput[] | timer_sessions_tagsUncheckedCreateWithoutTimer_sessionsInput[]
    connectOrCreate?: timer_sessions_tagsCreateOrConnectWithoutTimer_sessionsInput | timer_sessions_tagsCreateOrConnectWithoutTimer_sessionsInput[]
    createMany?: timer_sessions_tagsCreateManyTimer_sessionsInputEnvelope
    connect?: timer_sessions_tagsWhereUniqueInput | timer_sessions_tagsWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type UserUpdateOneRequiredWithoutTimerSessionsNestedInput = {
    create?: XOR<UserCreateWithoutTimerSessionsInput, UserUncheckedCreateWithoutTimerSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutTimerSessionsInput
    upsert?: UserUpsertWithoutTimerSessionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTimerSessionsInput, UserUpdateWithoutTimerSessionsInput>, UserUncheckedUpdateWithoutTimerSessionsInput>
  }

  export type timer_sessions_tagsUpdateManyWithoutTimer_sessionsNestedInput = {
    create?: XOR<timer_sessions_tagsCreateWithoutTimer_sessionsInput, timer_sessions_tagsUncheckedCreateWithoutTimer_sessionsInput> | timer_sessions_tagsCreateWithoutTimer_sessionsInput[] | timer_sessions_tagsUncheckedCreateWithoutTimer_sessionsInput[]
    connectOrCreate?: timer_sessions_tagsCreateOrConnectWithoutTimer_sessionsInput | timer_sessions_tagsCreateOrConnectWithoutTimer_sessionsInput[]
    upsert?: timer_sessions_tagsUpsertWithWhereUniqueWithoutTimer_sessionsInput | timer_sessions_tagsUpsertWithWhereUniqueWithoutTimer_sessionsInput[]
    createMany?: timer_sessions_tagsCreateManyTimer_sessionsInputEnvelope
    set?: timer_sessions_tagsWhereUniqueInput | timer_sessions_tagsWhereUniqueInput[]
    disconnect?: timer_sessions_tagsWhereUniqueInput | timer_sessions_tagsWhereUniqueInput[]
    delete?: timer_sessions_tagsWhereUniqueInput | timer_sessions_tagsWhereUniqueInput[]
    connect?: timer_sessions_tagsWhereUniqueInput | timer_sessions_tagsWhereUniqueInput[]
    update?: timer_sessions_tagsUpdateWithWhereUniqueWithoutTimer_sessionsInput | timer_sessions_tagsUpdateWithWhereUniqueWithoutTimer_sessionsInput[]
    updateMany?: timer_sessions_tagsUpdateManyWithWhereWithoutTimer_sessionsInput | timer_sessions_tagsUpdateManyWithWhereWithoutTimer_sessionsInput[]
    deleteMany?: timer_sessions_tagsScalarWhereInput | timer_sessions_tagsScalarWhereInput[]
  }

  export type timer_sessions_tagsUncheckedUpdateManyWithoutTimer_sessionsNestedInput = {
    create?: XOR<timer_sessions_tagsCreateWithoutTimer_sessionsInput, timer_sessions_tagsUncheckedCreateWithoutTimer_sessionsInput> | timer_sessions_tagsCreateWithoutTimer_sessionsInput[] | timer_sessions_tagsUncheckedCreateWithoutTimer_sessionsInput[]
    connectOrCreate?: timer_sessions_tagsCreateOrConnectWithoutTimer_sessionsInput | timer_sessions_tagsCreateOrConnectWithoutTimer_sessionsInput[]
    upsert?: timer_sessions_tagsUpsertWithWhereUniqueWithoutTimer_sessionsInput | timer_sessions_tagsUpsertWithWhereUniqueWithoutTimer_sessionsInput[]
    createMany?: timer_sessions_tagsCreateManyTimer_sessionsInputEnvelope
    set?: timer_sessions_tagsWhereUniqueInput | timer_sessions_tagsWhereUniqueInput[]
    disconnect?: timer_sessions_tagsWhereUniqueInput | timer_sessions_tagsWhereUniqueInput[]
    delete?: timer_sessions_tagsWhereUniqueInput | timer_sessions_tagsWhereUniqueInput[]
    connect?: timer_sessions_tagsWhereUniqueInput | timer_sessions_tagsWhereUniqueInput[]
    update?: timer_sessions_tagsUpdateWithWhereUniqueWithoutTimer_sessionsInput | timer_sessions_tagsUpdateWithWhereUniqueWithoutTimer_sessionsInput[]
    updateMany?: timer_sessions_tagsUpdateManyWithWhereWithoutTimer_sessionsInput | timer_sessions_tagsUpdateManyWithWhereWithoutTimer_sessionsInput[]
    deleteMany?: timer_sessions_tagsScalarWhereInput | timer_sessions_tagsScalarWhereInput[]
  }

  export type timer_sessions_tagsCreateNestedManyWithoutTagsInput = {
    create?: XOR<timer_sessions_tagsCreateWithoutTagsInput, timer_sessions_tagsUncheckedCreateWithoutTagsInput> | timer_sessions_tagsCreateWithoutTagsInput[] | timer_sessions_tagsUncheckedCreateWithoutTagsInput[]
    connectOrCreate?: timer_sessions_tagsCreateOrConnectWithoutTagsInput | timer_sessions_tagsCreateOrConnectWithoutTagsInput[]
    createMany?: timer_sessions_tagsCreateManyTagsInputEnvelope
    connect?: timer_sessions_tagsWhereUniqueInput | timer_sessions_tagsWhereUniqueInput[]
  }

  export type timer_sessions_tagsUncheckedCreateNestedManyWithoutTagsInput = {
    create?: XOR<timer_sessions_tagsCreateWithoutTagsInput, timer_sessions_tagsUncheckedCreateWithoutTagsInput> | timer_sessions_tagsCreateWithoutTagsInput[] | timer_sessions_tagsUncheckedCreateWithoutTagsInput[]
    connectOrCreate?: timer_sessions_tagsCreateOrConnectWithoutTagsInput | timer_sessions_tagsCreateOrConnectWithoutTagsInput[]
    createMany?: timer_sessions_tagsCreateManyTagsInputEnvelope
    connect?: timer_sessions_tagsWhereUniqueInput | timer_sessions_tagsWhereUniqueInput[]
  }

  export type timer_sessions_tagsUpdateManyWithoutTagsNestedInput = {
    create?: XOR<timer_sessions_tagsCreateWithoutTagsInput, timer_sessions_tagsUncheckedCreateWithoutTagsInput> | timer_sessions_tagsCreateWithoutTagsInput[] | timer_sessions_tagsUncheckedCreateWithoutTagsInput[]
    connectOrCreate?: timer_sessions_tagsCreateOrConnectWithoutTagsInput | timer_sessions_tagsCreateOrConnectWithoutTagsInput[]
    upsert?: timer_sessions_tagsUpsertWithWhereUniqueWithoutTagsInput | timer_sessions_tagsUpsertWithWhereUniqueWithoutTagsInput[]
    createMany?: timer_sessions_tagsCreateManyTagsInputEnvelope
    set?: timer_sessions_tagsWhereUniqueInput | timer_sessions_tagsWhereUniqueInput[]
    disconnect?: timer_sessions_tagsWhereUniqueInput | timer_sessions_tagsWhereUniqueInput[]
    delete?: timer_sessions_tagsWhereUniqueInput | timer_sessions_tagsWhereUniqueInput[]
    connect?: timer_sessions_tagsWhereUniqueInput | timer_sessions_tagsWhereUniqueInput[]
    update?: timer_sessions_tagsUpdateWithWhereUniqueWithoutTagsInput | timer_sessions_tagsUpdateWithWhereUniqueWithoutTagsInput[]
    updateMany?: timer_sessions_tagsUpdateManyWithWhereWithoutTagsInput | timer_sessions_tagsUpdateManyWithWhereWithoutTagsInput[]
    deleteMany?: timer_sessions_tagsScalarWhereInput | timer_sessions_tagsScalarWhereInput[]
  }

  export type timer_sessions_tagsUncheckedUpdateManyWithoutTagsNestedInput = {
    create?: XOR<timer_sessions_tagsCreateWithoutTagsInput, timer_sessions_tagsUncheckedCreateWithoutTagsInput> | timer_sessions_tagsCreateWithoutTagsInput[] | timer_sessions_tagsUncheckedCreateWithoutTagsInput[]
    connectOrCreate?: timer_sessions_tagsCreateOrConnectWithoutTagsInput | timer_sessions_tagsCreateOrConnectWithoutTagsInput[]
    upsert?: timer_sessions_tagsUpsertWithWhereUniqueWithoutTagsInput | timer_sessions_tagsUpsertWithWhereUniqueWithoutTagsInput[]
    createMany?: timer_sessions_tagsCreateManyTagsInputEnvelope
    set?: timer_sessions_tagsWhereUniqueInput | timer_sessions_tagsWhereUniqueInput[]
    disconnect?: timer_sessions_tagsWhereUniqueInput | timer_sessions_tagsWhereUniqueInput[]
    delete?: timer_sessions_tagsWhereUniqueInput | timer_sessions_tagsWhereUniqueInput[]
    connect?: timer_sessions_tagsWhereUniqueInput | timer_sessions_tagsWhereUniqueInput[]
    update?: timer_sessions_tagsUpdateWithWhereUniqueWithoutTagsInput | timer_sessions_tagsUpdateWithWhereUniqueWithoutTagsInput[]
    updateMany?: timer_sessions_tagsUpdateManyWithWhereWithoutTagsInput | timer_sessions_tagsUpdateManyWithWhereWithoutTagsInput[]
    deleteMany?: timer_sessions_tagsScalarWhereInput | timer_sessions_tagsScalarWhereInput[]
  }

  export type TagCreateNestedOneWithoutTimer_sessions_tagsInput = {
    create?: XOR<TagCreateWithoutTimer_sessions_tagsInput, TagUncheckedCreateWithoutTimer_sessions_tagsInput>
    connectOrCreate?: TagCreateOrConnectWithoutTimer_sessions_tagsInput
    connect?: TagWhereUniqueInput
  }

  export type TimerSessionCreateNestedOneWithoutTimer_sessions_tagsInput = {
    create?: XOR<TimerSessionCreateWithoutTimer_sessions_tagsInput, TimerSessionUncheckedCreateWithoutTimer_sessions_tagsInput>
    connectOrCreate?: TimerSessionCreateOrConnectWithoutTimer_sessions_tagsInput
    connect?: TimerSessionWhereUniqueInput
  }

  export type TagUpdateOneRequiredWithoutTimer_sessions_tagsNestedInput = {
    create?: XOR<TagCreateWithoutTimer_sessions_tagsInput, TagUncheckedCreateWithoutTimer_sessions_tagsInput>
    connectOrCreate?: TagCreateOrConnectWithoutTimer_sessions_tagsInput
    upsert?: TagUpsertWithoutTimer_sessions_tagsInput
    connect?: TagWhereUniqueInput
    update?: XOR<XOR<TagUpdateToOneWithWhereWithoutTimer_sessions_tagsInput, TagUpdateWithoutTimer_sessions_tagsInput>, TagUncheckedUpdateWithoutTimer_sessions_tagsInput>
  }

  export type TimerSessionUpdateOneRequiredWithoutTimer_sessions_tagsNestedInput = {
    create?: XOR<TimerSessionCreateWithoutTimer_sessions_tagsInput, TimerSessionUncheckedCreateWithoutTimer_sessions_tagsInput>
    connectOrCreate?: TimerSessionCreateOrConnectWithoutTimer_sessions_tagsInput
    upsert?: TimerSessionUpsertWithoutTimer_sessions_tagsInput
    connect?: TimerSessionWhereUniqueInput
    update?: XOR<XOR<TimerSessionUpdateToOneWithWhereWithoutTimer_sessions_tagsInput, TimerSessionUpdateWithoutTimer_sessions_tagsInput>, TimerSessionUncheckedUpdateWithoutTimer_sessions_tagsInput>
  }

  export type UserCreateNestedOneWithoutStudiesInput = {
    create?: XOR<UserCreateWithoutStudiesInput, UserUncheckedCreateWithoutStudiesInput>
    connectOrCreate?: UserCreateOrConnectWithoutStudiesInput
    connect?: UserWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserUpdateOneRequiredWithoutStudiesNestedInput = {
    create?: XOR<UserCreateWithoutStudiesInput, UserUncheckedCreateWithoutStudiesInput>
    connectOrCreate?: UserCreateOrConnectWithoutStudiesInput
    upsert?: UserUpsertWithoutStudiesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutStudiesInput, UserUpdateWithoutStudiesInput>, UserUncheckedUpdateWithoutStudiesInput>
  }

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
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

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
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
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type TimerSessionCreateWithoutUserInput = {
    id?: string
    title: string
    description?: string | null
    seconds?: number
    startedAt?: Date | string
    endedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    timer_sessions_tags?: timer_sessions_tagsCreateNestedManyWithoutTimer_sessionsInput
  }

  export type TimerSessionUncheckedCreateWithoutUserInput = {
    id?: string
    title: string
    description?: string | null
    seconds?: number
    startedAt?: Date | string
    endedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    timer_sessions_tags?: timer_sessions_tagsUncheckedCreateNestedManyWithoutTimer_sessionsInput
  }

  export type TimerSessionCreateOrConnectWithoutUserInput = {
    where: TimerSessionWhereUniqueInput
    create: XOR<TimerSessionCreateWithoutUserInput, TimerSessionUncheckedCreateWithoutUserInput>
  }

  export type TimerSessionCreateManyUserInputEnvelope = {
    data: TimerSessionCreateManyUserInput | TimerSessionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type StudyCreateWithoutUserInput = {
    id?: string
    subject: string
    seconds?: number
    isActive?: boolean
    isPaused?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StudyUncheckedCreateWithoutUserInput = {
    id?: string
    subject: string
    seconds?: number
    isActive?: boolean
    isPaused?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StudyCreateOrConnectWithoutUserInput = {
    where: StudyWhereUniqueInput
    create: XOR<StudyCreateWithoutUserInput, StudyUncheckedCreateWithoutUserInput>
  }

  export type StudyCreateManyUserInputEnvelope = {
    data: StudyCreateManyUserInput | StudyCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type TimerSessionUpsertWithWhereUniqueWithoutUserInput = {
    where: TimerSessionWhereUniqueInput
    update: XOR<TimerSessionUpdateWithoutUserInput, TimerSessionUncheckedUpdateWithoutUserInput>
    create: XOR<TimerSessionCreateWithoutUserInput, TimerSessionUncheckedCreateWithoutUserInput>
  }

  export type TimerSessionUpdateWithWhereUniqueWithoutUserInput = {
    where: TimerSessionWhereUniqueInput
    data: XOR<TimerSessionUpdateWithoutUserInput, TimerSessionUncheckedUpdateWithoutUserInput>
  }

  export type TimerSessionUpdateManyWithWhereWithoutUserInput = {
    where: TimerSessionScalarWhereInput
    data: XOR<TimerSessionUpdateManyMutationInput, TimerSessionUncheckedUpdateManyWithoutUserInput>
  }

  export type TimerSessionScalarWhereInput = {
    AND?: TimerSessionScalarWhereInput | TimerSessionScalarWhereInput[]
    OR?: TimerSessionScalarWhereInput[]
    NOT?: TimerSessionScalarWhereInput | TimerSessionScalarWhereInput[]
    id?: UuidFilter<"TimerSession"> | string
    title?: StringFilter<"TimerSession"> | string
    description?: StringNullableFilter<"TimerSession"> | string | null
    seconds?: IntFilter<"TimerSession"> | number
    startedAt?: DateTimeFilter<"TimerSession"> | Date | string
    endedAt?: DateTimeNullableFilter<"TimerSession"> | Date | string | null
    userId?: UuidFilter<"TimerSession"> | string
    createdAt?: DateTimeFilter<"TimerSession"> | Date | string
    updatedAt?: DateTimeFilter<"TimerSession"> | Date | string
  }

  export type StudyUpsertWithWhereUniqueWithoutUserInput = {
    where: StudyWhereUniqueInput
    update: XOR<StudyUpdateWithoutUserInput, StudyUncheckedUpdateWithoutUserInput>
    create: XOR<StudyCreateWithoutUserInput, StudyUncheckedCreateWithoutUserInput>
  }

  export type StudyUpdateWithWhereUniqueWithoutUserInput = {
    where: StudyWhereUniqueInput
    data: XOR<StudyUpdateWithoutUserInput, StudyUncheckedUpdateWithoutUserInput>
  }

  export type StudyUpdateManyWithWhereWithoutUserInput = {
    where: StudyScalarWhereInput
    data: XOR<StudyUpdateManyMutationInput, StudyUncheckedUpdateManyWithoutUserInput>
  }

  export type StudyScalarWhereInput = {
    AND?: StudyScalarWhereInput | StudyScalarWhereInput[]
    OR?: StudyScalarWhereInput[]
    NOT?: StudyScalarWhereInput | StudyScalarWhereInput[]
    id?: UuidFilter<"Study"> | string
    subject?: StringFilter<"Study"> | string
    userId?: UuidFilter<"Study"> | string
    seconds?: IntFilter<"Study"> | number
    isActive?: BoolFilter<"Study"> | boolean
    isPaused?: BoolFilter<"Study"> | boolean
    createdAt?: DateTimeFilter<"Study"> | Date | string
    updatedAt?: DateTimeFilter<"Study"> | Date | string
  }

  export type UserCreateWithoutTimerSessionsInput = {
    id?: string
    name: string
    email: string
    createdAt?: Date | string
    updatedAt?: Date | string
    studies?: StudyCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutTimerSessionsInput = {
    id?: string
    name: string
    email: string
    createdAt?: Date | string
    updatedAt?: Date | string
    studies?: StudyUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutTimerSessionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTimerSessionsInput, UserUncheckedCreateWithoutTimerSessionsInput>
  }

  export type timer_sessions_tagsCreateWithoutTimer_sessionsInput = {
    tags: TagCreateNestedOneWithoutTimer_sessions_tagsInput
  }

  export type timer_sessions_tagsUncheckedCreateWithoutTimer_sessionsInput = {
    tag_id: string
  }

  export type timer_sessions_tagsCreateOrConnectWithoutTimer_sessionsInput = {
    where: timer_sessions_tagsWhereUniqueInput
    create: XOR<timer_sessions_tagsCreateWithoutTimer_sessionsInput, timer_sessions_tagsUncheckedCreateWithoutTimer_sessionsInput>
  }

  export type timer_sessions_tagsCreateManyTimer_sessionsInputEnvelope = {
    data: timer_sessions_tagsCreateManyTimer_sessionsInput | timer_sessions_tagsCreateManyTimer_sessionsInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutTimerSessionsInput = {
    update: XOR<UserUpdateWithoutTimerSessionsInput, UserUncheckedUpdateWithoutTimerSessionsInput>
    create: XOR<UserCreateWithoutTimerSessionsInput, UserUncheckedCreateWithoutTimerSessionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTimerSessionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTimerSessionsInput, UserUncheckedUpdateWithoutTimerSessionsInput>
  }

  export type UserUpdateWithoutTimerSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    studies?: StudyUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTimerSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    studies?: StudyUncheckedUpdateManyWithoutUserNestedInput
  }

  export type timer_sessions_tagsUpsertWithWhereUniqueWithoutTimer_sessionsInput = {
    where: timer_sessions_tagsWhereUniqueInput
    update: XOR<timer_sessions_tagsUpdateWithoutTimer_sessionsInput, timer_sessions_tagsUncheckedUpdateWithoutTimer_sessionsInput>
    create: XOR<timer_sessions_tagsCreateWithoutTimer_sessionsInput, timer_sessions_tagsUncheckedCreateWithoutTimer_sessionsInput>
  }

  export type timer_sessions_tagsUpdateWithWhereUniqueWithoutTimer_sessionsInput = {
    where: timer_sessions_tagsWhereUniqueInput
    data: XOR<timer_sessions_tagsUpdateWithoutTimer_sessionsInput, timer_sessions_tagsUncheckedUpdateWithoutTimer_sessionsInput>
  }

  export type timer_sessions_tagsUpdateManyWithWhereWithoutTimer_sessionsInput = {
    where: timer_sessions_tagsScalarWhereInput
    data: XOR<timer_sessions_tagsUpdateManyMutationInput, timer_sessions_tagsUncheckedUpdateManyWithoutTimer_sessionsInput>
  }

  export type timer_sessions_tagsScalarWhereInput = {
    AND?: timer_sessions_tagsScalarWhereInput | timer_sessions_tagsScalarWhereInput[]
    OR?: timer_sessions_tagsScalarWhereInput[]
    NOT?: timer_sessions_tagsScalarWhereInput | timer_sessions_tagsScalarWhereInput[]
    timer_session_id?: UuidFilter<"timer_sessions_tags"> | string
    tag_id?: UuidFilter<"timer_sessions_tags"> | string
  }

  export type timer_sessions_tagsCreateWithoutTagsInput = {
    timer_sessions: TimerSessionCreateNestedOneWithoutTimer_sessions_tagsInput
  }

  export type timer_sessions_tagsUncheckedCreateWithoutTagsInput = {
    timer_session_id: string
  }

  export type timer_sessions_tagsCreateOrConnectWithoutTagsInput = {
    where: timer_sessions_tagsWhereUniqueInput
    create: XOR<timer_sessions_tagsCreateWithoutTagsInput, timer_sessions_tagsUncheckedCreateWithoutTagsInput>
  }

  export type timer_sessions_tagsCreateManyTagsInputEnvelope = {
    data: timer_sessions_tagsCreateManyTagsInput | timer_sessions_tagsCreateManyTagsInput[]
    skipDuplicates?: boolean
  }

  export type timer_sessions_tagsUpsertWithWhereUniqueWithoutTagsInput = {
    where: timer_sessions_tagsWhereUniqueInput
    update: XOR<timer_sessions_tagsUpdateWithoutTagsInput, timer_sessions_tagsUncheckedUpdateWithoutTagsInput>
    create: XOR<timer_sessions_tagsCreateWithoutTagsInput, timer_sessions_tagsUncheckedCreateWithoutTagsInput>
  }

  export type timer_sessions_tagsUpdateWithWhereUniqueWithoutTagsInput = {
    where: timer_sessions_tagsWhereUniqueInput
    data: XOR<timer_sessions_tagsUpdateWithoutTagsInput, timer_sessions_tagsUncheckedUpdateWithoutTagsInput>
  }

  export type timer_sessions_tagsUpdateManyWithWhereWithoutTagsInput = {
    where: timer_sessions_tagsScalarWhereInput
    data: XOR<timer_sessions_tagsUpdateManyMutationInput, timer_sessions_tagsUncheckedUpdateManyWithoutTagsInput>
  }

  export type TagCreateWithoutTimer_sessions_tagsInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TagUncheckedCreateWithoutTimer_sessions_tagsInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TagCreateOrConnectWithoutTimer_sessions_tagsInput = {
    where: TagWhereUniqueInput
    create: XOR<TagCreateWithoutTimer_sessions_tagsInput, TagUncheckedCreateWithoutTimer_sessions_tagsInput>
  }

  export type TimerSessionCreateWithoutTimer_sessions_tagsInput = {
    id?: string
    title: string
    description?: string | null
    seconds?: number
    startedAt?: Date | string
    endedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutTimerSessionsInput
  }

  export type TimerSessionUncheckedCreateWithoutTimer_sessions_tagsInput = {
    id?: string
    title: string
    description?: string | null
    seconds?: number
    startedAt?: Date | string
    endedAt?: Date | string | null
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TimerSessionCreateOrConnectWithoutTimer_sessions_tagsInput = {
    where: TimerSessionWhereUniqueInput
    create: XOR<TimerSessionCreateWithoutTimer_sessions_tagsInput, TimerSessionUncheckedCreateWithoutTimer_sessions_tagsInput>
  }

  export type TagUpsertWithoutTimer_sessions_tagsInput = {
    update: XOR<TagUpdateWithoutTimer_sessions_tagsInput, TagUncheckedUpdateWithoutTimer_sessions_tagsInput>
    create: XOR<TagCreateWithoutTimer_sessions_tagsInput, TagUncheckedCreateWithoutTimer_sessions_tagsInput>
    where?: TagWhereInput
  }

  export type TagUpdateToOneWithWhereWithoutTimer_sessions_tagsInput = {
    where?: TagWhereInput
    data: XOR<TagUpdateWithoutTimer_sessions_tagsInput, TagUncheckedUpdateWithoutTimer_sessions_tagsInput>
  }

  export type TagUpdateWithoutTimer_sessions_tagsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TagUncheckedUpdateWithoutTimer_sessions_tagsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TimerSessionUpsertWithoutTimer_sessions_tagsInput = {
    update: XOR<TimerSessionUpdateWithoutTimer_sessions_tagsInput, TimerSessionUncheckedUpdateWithoutTimer_sessions_tagsInput>
    create: XOR<TimerSessionCreateWithoutTimer_sessions_tagsInput, TimerSessionUncheckedCreateWithoutTimer_sessions_tagsInput>
    where?: TimerSessionWhereInput
  }

  export type TimerSessionUpdateToOneWithWhereWithoutTimer_sessions_tagsInput = {
    where?: TimerSessionWhereInput
    data: XOR<TimerSessionUpdateWithoutTimer_sessions_tagsInput, TimerSessionUncheckedUpdateWithoutTimer_sessions_tagsInput>
  }

  export type TimerSessionUpdateWithoutTimer_sessions_tagsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    seconds?: IntFieldUpdateOperationsInput | number
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutTimerSessionsNestedInput
  }

  export type TimerSessionUncheckedUpdateWithoutTimer_sessions_tagsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    seconds?: IntFieldUpdateOperationsInput | number
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateWithoutStudiesInput = {
    id?: string
    name: string
    email: string
    createdAt?: Date | string
    updatedAt?: Date | string
    timerSessions?: TimerSessionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutStudiesInput = {
    id?: string
    name: string
    email: string
    createdAt?: Date | string
    updatedAt?: Date | string
    timerSessions?: TimerSessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutStudiesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutStudiesInput, UserUncheckedCreateWithoutStudiesInput>
  }

  export type UserUpsertWithoutStudiesInput = {
    update: XOR<UserUpdateWithoutStudiesInput, UserUncheckedUpdateWithoutStudiesInput>
    create: XOR<UserCreateWithoutStudiesInput, UserUncheckedCreateWithoutStudiesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutStudiesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutStudiesInput, UserUncheckedUpdateWithoutStudiesInput>
  }

  export type UserUpdateWithoutStudiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    timerSessions?: TimerSessionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutStudiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    timerSessions?: TimerSessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type TimerSessionCreateManyUserInput = {
    id?: string
    title: string
    description?: string | null
    seconds?: number
    startedAt?: Date | string
    endedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StudyCreateManyUserInput = {
    id?: string
    subject: string
    seconds?: number
    isActive?: boolean
    isPaused?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TimerSessionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    seconds?: IntFieldUpdateOperationsInput | number
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    timer_sessions_tags?: timer_sessions_tagsUpdateManyWithoutTimer_sessionsNestedInput
  }

  export type TimerSessionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    seconds?: IntFieldUpdateOperationsInput | number
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    timer_sessions_tags?: timer_sessions_tagsUncheckedUpdateManyWithoutTimer_sessionsNestedInput
  }

  export type TimerSessionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    seconds?: IntFieldUpdateOperationsInput | number
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudyUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    seconds?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isPaused?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudyUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    seconds?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isPaused?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudyUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    seconds?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isPaused?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type timer_sessions_tagsCreateManyTimer_sessionsInput = {
    tag_id: string
  }

  export type timer_sessions_tagsUpdateWithoutTimer_sessionsInput = {
    tags?: TagUpdateOneRequiredWithoutTimer_sessions_tagsNestedInput
  }

  export type timer_sessions_tagsUncheckedUpdateWithoutTimer_sessionsInput = {
    tag_id?: StringFieldUpdateOperationsInput | string
  }

  export type timer_sessions_tagsUncheckedUpdateManyWithoutTimer_sessionsInput = {
    tag_id?: StringFieldUpdateOperationsInput | string
  }

  export type timer_sessions_tagsCreateManyTagsInput = {
    timer_session_id: string
  }

  export type timer_sessions_tagsUpdateWithoutTagsInput = {
    timer_sessions?: TimerSessionUpdateOneRequiredWithoutTimer_sessions_tagsNestedInput
  }

  export type timer_sessions_tagsUncheckedUpdateWithoutTagsInput = {
    timer_session_id?: StringFieldUpdateOperationsInput | string
  }

  export type timer_sessions_tagsUncheckedUpdateManyWithoutTagsInput = {
    timer_session_id?: StringFieldUpdateOperationsInput | string
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